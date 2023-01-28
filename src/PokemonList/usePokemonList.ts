import { useState, useEffect } from "react";

interface IPokemonResultsData {
  url: string;
  name: string;
}

interface IPokemonRawData {
  results: IPokemonResultsData[];
}

function fetchIdFromPokemonUrl(url: string): number {
  const tokens = url.split("/");
  return parseInt(tokens[tokens.length - 2]);
}

const usePokemonList = () => {
  const [pokemons, setPokemons] = useState<IPokemon[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<any>(null);

  async function fetchPokemonList() {
    setIsLoading(true);
    try {
      const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=30");
      const data: IPokemonRawData = await res.json();
      setPokemons(
        data.results.map((data) => {
          return {
            id: fetchIdFromPokemonUrl(data.url),
            name: data.name,
            imageUrl: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${fetchIdFromPokemonUrl(
              data.url
            )}.png`,
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
