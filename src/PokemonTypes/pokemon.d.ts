interface IPower {
  id: number;
  name: string;
}

interface IPokemon {
  id: number;
  name: string;
  imageUrl: string;
  power: IPower;
}
