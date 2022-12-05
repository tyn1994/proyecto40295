//import arrayItems from "../data/arrayItems";

function getDataItems() {
    return new Promise((resolve) => {
        fetch("https://pokeapi.co/api/v2/pokemon?limit=20")
        .then(response => response.json())
        .then(respJSON => {
            resolve(respJSON.results);
        });
    });
}

export function getOnePokemon(idItem) {
    return new Promise((resolve, reject) => {
        fetch("https://pokeapi.co/api/v2/pokemon-species/" + idItem + "/")
        .then(response => response.json())
        .then(respJSON => {
            resolve(respJSON);
        })
        .catch(error => {
            console.log("No se recibió un dato correcto (Pokémon no encontrado): " + error);
        });
    });
}

export function getDataItemsCategory(idCategory) {
    return new Promise((resolve) => {
        const arrayPokemon = [];
        fetch("https://pokeapi.co/api/v2/type/" + idCategory + "/?limit=20")
        .then(response => response.json())
        .then(respJSON => {
            respJSON.pokemon.forEach(element => {
                arrayPokemon.push({
                    name: element.pokemon.name,
                    url : element.pokemon.url
                });
            });
            resolve(arrayPokemon);
        });
    });
}

export default getDataItems;