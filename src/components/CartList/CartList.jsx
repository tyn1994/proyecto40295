import React from "react";
import { cartContext } from "../../storage/cartContext";
import { useContext } from "react";
import { Link } from "react-router-dom";

function CartList() {
  const ctxTotalItemsInCart = useContext(cartContext).totalItemsInCart;
  const ctxTotalPriceInCart = useContext(cartContext).totalPriceInCart;
  const ctxRemoveItem = useContext(cartContext).removeItem;
  const ctxClearCart = useContext(cartContext).clearCart;
  const ctxCart = useContext(cartContext).cart;

  function loadItemsToTable() {
    console.log(ctxCart);

    return (
      <table border="1" width="100%">
        <tr align="center">
          <td>ITEM ID</td>
          <td>Imagen</td>
          <td>Nombre del producto</td>
          <td>Cantidad</td>
          <td>Costo unitario</td>
          <td>Costo total</td>
          <td>¿Eliminar items?</td>
        </tr>
        {ctxCart.map((item) => (
          <tr align="center">
            <td>{item.id}</td>
            <td>
              <img src={item.img} width="32px" alt={item.name} />
            </td>
            <td>{item.name}</td>
            <td>{item.quantity}</td>
            <td>$ {item.price}</td>
            <td>$ {item.quantity * item.price}</td>
            <td>
              <button onClick={() => ctxRemoveItem(item.id)}>
                Remover items
              </button>
            </td>
          </tr>
        ))}
        <tr align="center">
          <td colspan="7">
            Costo total de todos los productos: $ {ctxTotalPriceInCart()}
            <br />
            <button onClick={() => ctxClearCart()}>Vaciar carrito</button>
          </td>
        </tr>
      </table>
    );
  }

  let emptyCart = ctxTotalItemsInCart() === 0;
  return (
    <>
      {emptyCart ? (
        <>
          <h3>El carrito se encuentra vacío</h3>
          <Link to="/">Ir al inicio a buscar productos!</Link>
        </>
      ) : (
        loadItemsToTable()
      )}
    </>
  );
}

export default CartList;
