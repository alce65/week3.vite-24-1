import { Pokemon, PokemonDetails, PokemonResponse } from '../models/pokemon';
import { StateStructure } from '../types/state';

export class PokemonApiRepo {
  url: string;
  constructor() {
    this.url = this.initialUrl;
  }

  get initialUrl() {
    const offset = 0;
    const limit = 20;
    return `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`;
  }

  async getAllPokemons(url?: string): Promise<StateStructure> {
    const response = await fetch(url || this.url);
    const data = (await response.json()) as PokemonResponse;
    console.log('API Data', data);

    const allDetails: Promise<PokemonDetails>[] = [];

    data.results.forEach((poke) => {
      allDetails.push(this.getPokemonDetails(poke.url));
    });

    const values = await Promise.all(allDetails).then((values) =>
      values.map((item) => ({
        id: item.id,
        height: item.height,
        weight: item.weight,
        sprites: item.sprites,
      }))
    );

    const pokemons: Pokemon[] = data.results.map((poke, index) => ({
      ...poke,
      ...values[index],
      isFavorite: false,
    }));

    const result: StateStructure = {
      count: data.count,
      nextUrl: data.next,
      previousUrl: data.previous,
      pokeData: pokemons,
    };

    console.log('Repo Result', result);
    return result;
  }

  async getPokemonDetails(url: string): Promise<PokemonDetails> {
    const response = await fetch(url);
    const data = (await response.json()) as PokemonDetails;
    return data;
  }
}
