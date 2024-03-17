/* eslint-disable camelcase */
import { Pokemon, Sprites } from '../models/pokemon';

export const getPokemons = (): Pokemon[] => {
  const pokemons: Pokemon[] = [
    {
      id: 1,
      name: 'bulbasaur',
      height: 7,
      weight: 69,
      url: 'https://pokeapi.co/api/v2/pokemon/1/',

      sprites: {
        back_default:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png',
        front_default:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
      } as Sprites,
      isFavorite: true,
    },
    {
      id: 2,
      name: 'ivysaur',
      height: 10,
      weight: 130,
      url: 'https://pokeapi.co/api/v2/pokemon/2/',
      sprites: {
        back_default:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/2.png',
        front_default:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png',
      } as Sprites,
      isFavorite: false,
    },
    {
      id: 3,
      name: 'venusaur',
      height: 20,
      weight: 1000,
      url: 'https://pokeapi.co/api/v2/pokemon/3/',
      sprites: {
        back_default:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/3.png',
        front_default:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png',
      } as Sprites,
      isFavorite: false,
    },
  ];
  return pokemons;
};
