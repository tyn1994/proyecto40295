import { useState, useContext, useEffect } from "react";
import "./itemCount.css";
import { cartContext } from "../../storage/cartContext";

function ItemCount(props) {
  const ctxAddToCart = useContext(cartContext).addToCart;
  const ctxCart = useContext(cartContext).cart;
  const [qItems, setQItems] = useState(1);
  const [ctrlStock, setCtrlStock] = useState(props.stock);

  useEffect(() => {
    let itemIndexFound = ctxCart.findIndex(
      (itemInContext) => itemInContext.id === props.data.id
    );

    if (itemIndexFound != -1) {
      setCtrlStock(props.stock - ctxCart[itemIndexFound].quantity);
    }
  }, []);

  function handleIncrValue() {
    setQItems(qItems + 1);
  }

  function handleDecrValue() {
    setQItems(qItems - 1);
  }

  function addToCart(value) {
    let itemIndexFound = ctxCart.findIndex(
      (itemInContext) => itemInContext.id === props.data.id
    );

    if (itemIndexFound === -1) {
      ctxAddToCart(props.data, value);
      setCtrlStock(ctrlStock - value);
    } else {
      setCtrlStock(props.stock - ctxCart[itemIndexFound].quantity);

      if (ctxCart[itemIndexFound].quantity < props.stock) {
        ctxAddToCart(props.data, value);
        setCtrlStock(ctrlStock - value);
        console.log(ctxCart[itemIndexFound].quantity);
      } else {
        alert(
          "No hay stock disponible (límite 5). Tiene agregados " +
            ctxCart[itemIndexFound].quantity +
            " y quiere agregar " +
            value
        );
      }
    }
  }

  return (
    <div>
      <div className="flexStyle">
        <button onClick={handleDecrValue} disabled={qItems < 2}>
          -
        </button>
        <h6>{qItems}</h6>
        <button onClick={handleIncrValue} disabled={qItems > ctrlStock - 1}>
          +
        </button>
      </div>
      <button onClick={() => addToCart(qItems)}>Agregar al carrito</button>
    </div>
  );
}

export default ItemCount;
