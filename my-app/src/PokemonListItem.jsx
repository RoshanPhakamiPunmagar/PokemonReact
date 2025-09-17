const PokemonListItem = (inputObject) => {
  return (
    <div className={"pokecard " + inputObject.pokemonItem.type.toLowerCase()}>
      <img src={inputObject.pokemonItem.imageUrl} alt="pokemonImage" />
      <h3>Name: {inputObject.pokemonItem.name}</h3>
      <div className="pokemon-type">Type: {inputObject.pokemonItem.type}</div>
    </div>
  );
};

export default PokemonListItem;

// import React from 'react'

// const PokemonListItem = () => {
//   return (
//     <div>PokemonListItem</div>
//   )
// }

// export default PokemonListItem

//rafce
