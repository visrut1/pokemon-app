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
      {error !== null ?? <span>error</span>}
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
