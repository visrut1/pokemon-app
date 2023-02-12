import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BASE_URL } from "../env";

export const PokemonDetail = () => {
  const params = useParams();
  const [pokemon, setPokemon] = useState<IPokemon>();

  const fetchPokemonDetail = async (id: string) => {
    const response = await fetch(`${BASE_URL}/pokemons/id/${id}`);
    const data = await response.json();
    setPokemon(data);
    console.log(data.power.name);
  };

  useEffect(() => {
    fetchPokemonDetail(params.id!);
  }, [params.id]);

  return (
    <>
      {pokemon && (
        <>
          <h1>{pokemon.name}</h1>
          <h1>{pokemon.power.name}</h1>
        </>
      )}
    </>
  );
};
