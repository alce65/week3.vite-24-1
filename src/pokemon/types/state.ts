import { Pokemon } from '../models/pokemon';

export type StateStructure = {
  count: number;
  nextUrl: string | null;
  previousUrl: string | null;
  pokeData: Array<Pokemon>;
  // Alt favorites: Array<Pokemon>;
};
