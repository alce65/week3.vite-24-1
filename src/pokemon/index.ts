import './css/styles.css';
import { PokeList } from './components/poke.list';
import { PokemonApiRepo } from './repo/poke.api.repo';

const repo = new PokemonApiRepo();

// eslint-disable-next-line no-new
new PokeList('.poke-container', repo);
