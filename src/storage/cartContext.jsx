import { createContext, useState } from "react";

const cartContext = createContext({ cart: [] });
const Provider = cartContext.Provider;

function CartContextProvider(props) {
  const [cart, setCart] = useState([]);

  const value = {
    cart,
    addToCart,
    removeItem,
    clearCart,
    totalPriceInCart,
    totalItemsInCart
  };

  function addToCart(item, quantity) {
    let itemIndexFound = cart.findIndex(
      (itemInContext) => itemInContext.id === item.id
    );

    const newCart = [...cart];
    if (itemIndexFound !== -1) {
        newCart[itemIndexFound].quantity += quantity;
    } else {
        newCart.push({
          id: item.id,
          name: item.name,
          img: item.img,
          price: item.price,
          description: item.description,
          stock: item.stock,
          quantity: quantity,
        }); //No pude usar el spread con el newItem, no me dejaba modificar los datos
    }
    setCart(newCart);
    console.log(newCart);
  }

  function removeItem(id) {
    let itemIndexFound = cart.findIndex(
      (itemInContext) => itemInContext.id === id
    );

    const newCart = [...cart];
    newCart.splice(itemIndexFound, 1);
    setCart(newCart);
  }

  function clearCart() { 
    setCart([]);
  }

  function totalPriceInCart() {
    let priceItemsAll = 0;
    cart.forEach( item => priceItemsAll += (item.quantity * item.price));
    return priceItemsAll;
  }

  function totalItemsInCart() {
    let quantityItems = 0;
    cart.forEach( item => quantityItems += item.quantity);
    return quantityItems;
  }

  return <Provider value={value}>{props.children}</Provider>;
}

export { cartContext, CartContextProvider };
