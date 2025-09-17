import PokemonListItem from "./PokemonListItem";

const PokemonList = () => {
  const pokemon = [
    {
      id: 1,
      name: "Bulbasaur",
      type: "Grass",
      imageUrl:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/001.png",
    },
    {
      id: 2,
      name: "Ivysaur",
      type: "Grass",
      imageUrl:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/002.png",
    },
    {
      id: 3,
      name: "Venusaur",
      type: "Grass",
      imageUrl:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/003.png",
    },
    {
      id: 4,
      name: "Charmander",
      type: "Fire",
      imageUrl:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/004.png",
    },
    {
      id: 5,
      name: "Charmeleon",
      type: "Fire",
      imageUrl:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/005.png",
    },
    {
      id: 6,
      name: "Charizard",
      type: "Fire",
      imageUrl:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/006.png",
    },
    {
      id: 7,
      name: "Squirtle",
      type: "Water",
      imageUrl:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/007.png",
    },
    {
      id: 8,
      name: "Wartortle",
      type: "Water",
      imageUrl:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/008.png",
    },
    {
      id: 9,
      name: "Blastoise",
      type: "Water",
      imageUrl:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/009.png",
    },
    {
      id: 10,
      name: "Caterpie",
      type: "Bug",
      imageUrl:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/010.png",
    },
    {
      id: 11,
      name: "Metapod",
      type: "Bug",
      imageUrl:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/011.png",
    },
    {
      id: 12,
      name: "Butterfree",
      type: "Bug",
      imageUrl:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/012.png",
    },
    {
      id: 13,
      name: "Weedle",
      type: "Bug",
      imageUrl:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/013.png",
    },
    {
      id: 14,
      name: "Kakuna",
      type: "Bug",
      imageUrl:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/014.png",
    },
    {
      id: 15,
      name: "Beedrill",
      type: "Bug",
      imageUrl:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/015.png",
    },
    {
      id: 16,
      name: "Pidgey",
      type: "Flying",
      imageUrl:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/016.png",
    },
    {
      id: 17,
      name: "Pidgeotto",
      type: "Flying",
      imageUrl:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/017.png",
    },
    {
      id: 18,
      name: "Pidgeot",
      type: "Flying",
      imageUrl:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/018.png",
    },
    {
      id: 19,
      name: "Rattata",
      type: "Normal",
      imageUrl:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/019.png",
    },
    {
      id: 20,
      name: "Raticate",
      type: "Normal",
      imageUrl:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/020.png",
    },
    {
      id: 21,
      name: "Spearow",
      type: "Flying",
      imageUrl:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/021.png",
    },
    {
      id: 22,
      name: "Fearow",
      type: "Flying",
      imageUrl:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/022.png",
    },
    {
      id: 23,
      name: "Ekans",
      type: "Poison",
      imageUrl:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/023.png",
    },
    {
      id: 24,
      name: "Arbok",
      type: "Poison",
      imageUrl:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/024.png",
    },
    {
      id: 25,
      name: "Pikachu",
      type: "Electric",
      imageUrl:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/025.png",
    },
    {
      id: 26,
      name: "Raichu",
      type: "Electric",
      imageUrl:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/026.png",
    },
    {
      id: 27,
      name: "Sandshrew",
      type: "Ground",
      imageUrl:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/027.png",
    },
    {
      id: 28,
      name: "Sandslash",
      type: "Ground",
      imageUrl:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/028.png",
    },
    {
      id: 29,
      name: "Nidoran♀",
      type: "Poison",
      imageUrl:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/029.png",
    },
    {
      id: 30,
      name: "Nidorina",
      type: "Poison",
      imageUrl:
        "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/030.png",
    },
  ];

  return (
    <div className="pokemon-list">
      {pokemon.map((item) => {
        return <PokemonListItem pokemonItem={item} />;
      })}
    </div>
  );
};

export default PokemonList;
