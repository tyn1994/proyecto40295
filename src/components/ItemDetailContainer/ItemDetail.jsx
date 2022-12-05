import './itemDetail.css';
import ItemCount from './ItemCount';

function ItemDetail(props) {
  return (
    <div className="cardview alignColumn">
        <div className="alignRow">
            <div className="alignColumn">
                <h1>{props.name}</h1>
                <img src={props.img} alt="Imagen de Pokémon"/>
                <h4>$ {props.price}</h4>
            </div>
            <div>
                <ItemCount stock={props.stock}/>
            </div>
        </div>
        <div>
          <h6>{props.description}</h6>
        </div>
    </div>
  )
}

export default ItemDetail