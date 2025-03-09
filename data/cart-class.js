// class is used to help us generate the objects and it is called object generator
//benefits: constructor:It lets us put the setup code inside the class and the main use of the constructor is that it automatically runs when we create an instancce of the class and we should not return anything from constructor


//this: 1.Inside a method ,'this' points to the outer object but inside a function this=undefines but we can chsnge it whatever by using .call() method
/*eg: function logThis() {
  console.log(this);//o.p:undefined
}
  logThis.call('hello'); it overrides the this in the function and o.p will be 'hello'
  */
 //but in the arrow functions the 'this' would never change

 //Backend: it is just another computer which manages the data of a website
class Cart {
  cartItems;
  #localStorageKey;//# is to make variable private

  constructor(localStorageKey) {
    //this points to the object we created and by using 'this' we are gonna get it's respective localstoragekey 
    this.#localStorageKey=localStorageKey;
    this.#loadFromStorage();

  }

  #loadFromStorage() {
    this.cartItems=JSON.parse(localStorage.getItem(this.#localStorageKey));
  if (!this.cartItems) {
    this.cartItems=[{
      productId:'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
      quantity:2,
      deliveryOptionId:'1'
    },
    {
      productId:'15b6fc6f-327a-4ec4-896f-486349e85a3d',
      quantity:1,
      deliveryOptionId:'2'
    }];
  }
  }

  saveToStorage() {
    localStorage.setItem(this.#localStorageKey,JSON.stringify(this.cartItems));
  }

  addToCart(productId) {
    let matchingItem;
  
    this.CartItems.forEach((cartItem)=> {
      if (productId===cartItem.productId) {
        matchingItem=cartItem;
      }
    });
    if (matchingItem) {
      matchingItem.quantity+=1;
    }
    else {
      this.cartItems.push({
        productId:productId,
        quantity:1,
        deliveryOptionId:'1'
      });
    }
    this.saveToStorage();
  }

  removeFromCart(productId) {
    const newCart=[];
    this.cartItems.forEach((cartItem)=> {
      if (cartItem.productId !== productId) {
        newCart.push(cartItem);
      }
    });
    this.cartItems=newCart;
    this.saveToStorage();
  }

  updateDeliveryDate(productId,deliveryOptionId) {
    let matchingItem;
  
    this.cartItems.forEach((cartItem)=> {
      if (productId===cartItem.productId) {
        matchingItem=cartItem;
      }
    });
  
    matchingItem.deliveryOptionId=deliveryOptionId;
  
    this.saveToStorage();
  }

}

const cart=new Cart('cart-oop');
const businessCart=new Cart('cart-business');

