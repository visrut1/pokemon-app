import { useState, useEffect } from "react";
import { BASE_URL } from "../env";

const usePokemonList = () => {
  const [pokemons, setPokemons] = useState<IPokemon[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<any>(null);

  async function fetchPokemonList() {
    setIsLoading(true);
    try {
      const res = await fetch(`${BASE_URL}/pokemons`);
      const data: IPokemon[] = await res.json();
      setPokemons(
        data.map((data) => {
          return {
            id: data.id,
            name: data.name,
            imageUrl: data.imageUrl,
          };
        })
      );
      setIsLoading(false);
    } catch (error) {
      setError(error);
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchPokemonList();
    return () => {};
  }, []);

  return { pokemons, isLoading, error };
};

export default usePokemonList;
