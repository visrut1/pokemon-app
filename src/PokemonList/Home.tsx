import "./style/PokemonList.css";

import { PokemonCard } from "./PokemonCard";
import usePokemonList from "./usePokemonList";
import { useContext } from "react";
import SearchContext from "../Context/SearchContext";
import { BASE_URL } from "../env";

export const Home = () => {
  const { pokemons, isLoading, error, setPokemons } = usePokemonList();
  const { searchTerm } = useContext(SearchContext);

  const deletePokemonHandler = async (id: number) => {
    const response = await fetch(`${BASE_URL}/pokemons/${id}`, {
      method: "DELETE",
    });
    if (response.ok) {
      setPokemons(pokemons.filter((pokemon) => pokemon.id !== id));
    }
  };

  const deletePokemon = (id: number) => {
    deletePokemonHandler(id);
  };

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
          .map((pokemon) => (
            <PokemonCard
              pokemon={pokemon}
              key={pokemon.id}
              deletePokemon={deletePokemon}
            />
          ))}
      </div>
    </>
  );
};
