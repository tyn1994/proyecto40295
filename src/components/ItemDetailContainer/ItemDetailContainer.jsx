import { getOnePokemon } from "../../services/mockService";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";

function ItemDetailContainer() {
  const [loadItem, setLoadItem] = useState([]);

  let itemID = useParams().id;

  useEffect(() => {
    getOnePokemon(itemID).then((resp) => {
      setLoadItem(resp);
    });
  }, [itemID]);

  return (
    <div>
      <ItemDetail
      name={upperText(loadItem.name)}
      img={setImagePokemon(itemID)}
      price={(itemID * 10)}
      description={setDescPokemon(loadItem.flavor_text_entries)} 
      stock={5}/>
    </div>
  );
}

function upperText(value) {
  if (value !== undefined){
    return value.charAt(0).toUpperCase() + value.slice(1);
  } else {
    return "Cargando nombre del pokémon...";
  }
}

function setImagePokemon(id) {
  if (id !== undefined){
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
  } else {
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png`;
  }
}

function setDescPokemon(value) {
  if (value !== undefined){
    return value[50].flavor_text;
  } else {
    return "Cargando descripción del pokémon...";
  }
}

export default ItemDetailContainer;
