//show cart 

(
    function(){
    const cartInfo = document.getElementById('cart-info');
    const cart = document.getElementById('cart');
    cartInfo.addEventListener('click', function(){
        cart.classList.toggle('show-cart');
    })
    }
)()

//  add items to the cart

(function(){
const cartBtn = document.querySelectorAll('.store-item-icon');

 cartBtn.forEach(btn=>{
     btn.addEventListener('click', function(event){
        //  console.log(event.target);

         if(event.target.parentElement.classList.contains('store-item-icon')){
       const fullPath = event.target.parentElement.previousElementSibling.src;
       const pos = fullPath.indexOf('img') + 3;
       const partPath = fullPath.slice(pos);
        
        
       const img = `img-cart${partPath}`;
       const name = event.target.parentElement.parentElement.nextElementSibling.children[0].children[0].textContent;
       const slice_price = event.target.parentElement.parentElement.nextElementSibling.children[0].children[1].textContent;
      const price = slice_price.slice(1).trim();

       const item = {img,name,price}

    const cartItem = document.createElement('div');
    cartItem.classList.add(
        'cart-item','d-flex','justify-content-between', 'text-capitalize','my-3'
    )
    const cart = document.getElementById('cart');
    cartItem.innerHTML = 
               `
           <img src='${item.img}' class="img-fluid rounded-circle" id="item-img" alt="">
            <div class="item-text">

              <p id="cart-item-title" class="font-weight-bold mb-0">${item.name}</p>
              <span>$</span>
              <span id="cart-item-price" class="cart-item-price" class="mb-0">${item.price}</span>
            </div>
            <a href="#" id='cart-item-remove' class="cart-item-remove">
              <i class="fas fa-trash"></i>
            </a>
               `;
       const total = document.querySelector('.cart-total-container');        
           cart.insertBefore(cartItem,total);  

       alert('Item inserted to cart');
   showTotal();

         }
     })
 });

  function showTotal(){
      const total = [];
      const items = document.querySelectorAll('.cart-item-price');
      items.forEach(item=>{
          total.push(parseFloat(item.textContent));
      });

      const floatMoney = total.reduce((total,item)=>{
          total += item;
          return total;
      },0);
    const money = floatMoney.toFixed(2);

    document.querySelector('#cart-total').textContent = money;
    document.querySelector('.item-total').textContent = money;
    document.querySelector('#item-count').textContent = total.length;
  }
 
}())()