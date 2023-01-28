import "./style/PokemonCard.css";

export const PokemonCard = ({ pokemon }: { pokemon: IPokemon }) => {
  return (
    <div className="card">
      <img src={pokemon.imageUrl} alt="Pokemon" />
      <p>{pokemon.name}</p>
    </div>
  );
};
