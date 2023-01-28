import { PokemonCard } from "./PokemonCard";
import usePokemonList from "./usePokemonList";
import "./style/PokemonList.css";

export const Home = () => {
  const { pokemons, isLoading, error } = usePokemonList();
  return (
    <>
      {isLoading ?? <h1>Loading...</h1>}
      {error !== null ?? <span>error</span>}
      <div className="list">
        {pokemons.map((pokemon, index) => (
          <PokemonCard pokemon={pokemon} key={index} />
        ))}
      </div>
    </>
  );
};
