import { Link } from "react-router-dom";
import "./style/PokemonCard.css";

interface IPokemonCardProps {
  pokemon: IPokemon;
  deletePokemon: Function;
}

export const PokemonCard = ({ pokemon, deletePokemon }: IPokemonCardProps) => {
  return (
    <div className="card">
      <Link to={`/pokemon/${pokemon.id}/`}>
        <img src={pokemon.imageUrl} alt="Pokemon" style={{ width: "200px" }} />
        <p>{pokemon.name}</p>
      </Link>
      <button
        onClick={() => deletePokemon(pokemon.id)}
        className="bg-red-500 hover:bg-red-400 text-white text-xs py-1 px-2 border-b-4 border-red-700 hover:border-red-500 outline-none rounded"
      >
        Delete
      </button>
    </div>
  );
};
