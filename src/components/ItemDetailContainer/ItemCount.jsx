import { useState } from "react";
import "./itemCount.css";

function ItemCount(props) {
    const [qItems, setQItems] = useState(1);

    function handleIncrValue () {
        setQItems(qItems + 1);
    }

    function handleDecrValue () {
        setQItems(qItems - 1);
    }

    function addToCart () {
        console.log("Agregado al carrito!");
    }

    return (
    <div>
        <div className="flexStyle">
            <button onClick={handleDecrValue} disabled={qItems < 2}>-</button>
            <h6>{qItems}</h6>
            <button onClick={handleIncrValue} disabled={qItems > (props.stock -1)}>+</button>
        </div>
        <button onClick={addToCart}>Agregar al carrito</button>
    </div>
  )
}

export default ItemCount