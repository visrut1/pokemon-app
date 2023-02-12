import "./style/PokemonList.css";

import { PokemonCard } from "./PokemonCard";
import usePokemonList from "./usePokemonList";
import { useContext } from "react";
import SearchContext from "../Context/SearchContext";

export const Home = () => {
  const { pokemons, isLoading, error } = usePokemonList();
  const { searchTerm } = useContext(SearchContext);

  return (
    <>
      {isLoading ?? <h1>Loading...</h1>}
      {error && (
        <div
          role="alert"
          className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative m-4"
        >
          <strong className="font-bold">Error: </strong>
          <span className="block sm:inline">{error.toString()}</span>
        </div>
      )}
      <div className="list">
        {pokemons
          .filter((pokemon) => pokemon.name.includes(searchTerm))
          .map((pokemon, index) => (
            <PokemonCard pokemon={pokemon} key={index} />
          ))}
      </div>
    </>
  );
};
