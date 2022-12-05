import "./item.css";
import { Link } from "react-router-dom";

function Item(props) {
  let urlDetail = `/pokemon/${props.id}`;

  return (
    <Link to={urlDetail}>
      <div className="cardview">
        <h4>{props.title}</h4>
        <img src={props.srcImage} alt="Imagen de Pokémon"/>
        <h6>$ {props.price}</h6>
    </div>
    </Link>
  )
}

export default Item