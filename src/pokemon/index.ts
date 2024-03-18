import './css/styles.css';
import { PokeList } from './components/poke.list';
import { PokemonApiRepo } from './repo/poke.api.repo';
import { DetailsPage } from './pages/details';

const repo = new PokemonApiRepo();

const { pathname } = location;

if (pathname === '/pokemon.html') {
  // eslint-disable-next-line no-new
  new PokeList('.poke-container', repo);
} else if (pathname === '/poke-details.html') {
  // eslint-disable-next-line no-new
  new DetailsPage('.poke-container');
} else {
  console.log('No Pokemon', pathname);
}
