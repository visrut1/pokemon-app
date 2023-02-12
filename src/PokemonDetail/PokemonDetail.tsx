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
  };

  useEffect(() => {
    fetchPokemonDetail(params.id!);
  }, [params.id]);

  return (
    <>
      {pokemon && (
        <main className="flex flex-col justify-center items-center">
          <img src={pokemon.imageUrl} alt={pokemon.name} width={500} />
          <h1 className="text-3xl">{pokemon.name}</h1>
          <h1 className="text-xl">{pokemon.power.name}</h1>
        </main>
      )}
    </>
  );
};
