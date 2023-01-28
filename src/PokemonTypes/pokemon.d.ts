interface IPokemon {
  id: number;
  name: string;
  imageUrl: string;
  height?: number;
  weight?: number;
  types?: string[];
}
