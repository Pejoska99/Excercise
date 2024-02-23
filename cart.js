let itemCountSpam=document.getElementById('itemCount')
let itemCount=0;
let cartItems = 
localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : [];
if(cartItems.length>0){
    itemCount=cartItems.map(el => el.quantity).reduce((curr,acc)=>
        acc + curr
    )
    updateCart();
}







function openCart() {
    modalBody.innerHTML='';
    cartItems.forEach(item =>{
        modalBody.innerHTML += `
        <table class="table">
        <thead>
          <th>Img</th>
          <th>Name</th>
          <th>Price</th>
          <th>Total Price</th>
          <th>Quantity</th>
        </thead>
        <tbody id="tBody">
        <tr id="${item.id}">
          <td>
            <img
          src="${item.img}"
          style="width: 50px; height: 50px"
            />
          </td>
          <td>${item.name}</td>
          <td>${item.price}</td>  
          <td>${item.totalPrice}</td>
          <td id="cardQ${item.id}">${item.quantity}</td>
          <td>
            <button class="btn btn-success" onclick="incrementItemQuantity(${item.id})" type="button">+</button>
            <button class="btn btn-danger" onclick="decrementItemQuantity(${item.id})" type="button">-</button>
          </td>
        </tr>
        </tbody>
      </table>
        `;
    })
    
}


function addToCart(drinkId){
    console.log(drinkId);
    console.log(items)
    const drink=items.find(el =>el.id == drinkId);
    const cartDrink=cartItems.find(el => el.id==drinkId)
    drink.totalPrice=drink.quantity*drink.price;
    if(cartDrink){
        cartDrink.quantity++;
        cartDrink.totalPrice=(cartDrink.quantity*cartDrink.totalPrice).toFixed(2);
    }
    else{
        drink.quantity=1;
        drink.totalPrice=drink.price;
        cartItems.push(drink);
    }

    localStorage.setItem("cartItems",JSON.stringify(cartItems));
  
    itemCount++; 
  
    updateCart()
 
}

function updateCart(){
    itemCountSpam.innerText=itemCount;
}

function incrementItemQuantity (drinkId) {

}

function decrementItemQuantity (drinkId) {

}