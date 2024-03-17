import './css/styles.css';

import { getPokemons } from './repo/data.mock';
import { PokeList } from './components/poke.list';
import { PokemonApiRepo } from './repo/poke.api.repo';

console.log('pokemon');
const pokemons = getPokemons();
console.log(pokemons);

const repo = new PokemonApiRepo();

// eslint-disable-next-line no-new
new PokeList('.poke-container', pokemons, repo);
