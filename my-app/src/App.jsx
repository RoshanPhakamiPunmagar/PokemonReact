import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Welcome from "./Welcome";
import PokemonList from "./PokemonList";

const App = () => {
  return (
    <>
      <h1>PokemonList</h1>
      <PokemonList />
    </>
  );
};

export default App;
