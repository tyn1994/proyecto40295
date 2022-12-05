import "./itemList.css";
import React from 'react'
import Item from './Item'

function ItemList(props) {
  return (
    <div>
      <div className="flexStyle">
        {props.loadItems.slice(0, 10).map((item) => (
          <Item
            key={splitGetIDFromPokemon(item.url)}
            id={splitGetIDFromPokemon(item.url)}
            title={upperText(item.name)}
            srcImage={setImagePokemon(splitGetIDFromPokemon(item.url))}
            price={(splitGetIDFromPokemon(item.url) * 10)}
          />
        ))}
      </div>
    </div>
  )
}

function splitGetIDFromPokemon(url) {
    let splitted = url.split("https://pokeapi.co/api/v2/pokemon/");
    let doubleSplitted = splitted[1].split("/");
    return doubleSplitted[0];
}

function upperText(value) {
    return value.charAt(0).toUpperCase() + value.slice(1);
}

function setImagePokemon(id) {
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
}

export default ItemList