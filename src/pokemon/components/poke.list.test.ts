import { Pokemon } from '../models/pokemon';
import { PokemonApiRepo } from '../repo/poke.api.repo';
import { StateStructure } from '../types/state';
import { PokeList } from './poke.list';
import { screen } from '@testing-library/dom';
// Alt import { MOCK_FULL_STATE } from '../../__mocks__/state';

const MOCK_FULL_STATE: StateStructure = {
  count: 1118,
  nextUrl: '',
  previousUrl: '',
  pokeData: [
    {
      id: 143,
      name: 'snorlax',
      url: 'https://pokeapi.co/api/v2/pokemon/143/',
    } as Pokemon,
  ],
};

const repo: PokemonApiRepo = {
  getAllPokemons: jest.fn().mockResolvedValue(MOCK_FULL_STATE),
} as unknown as PokemonApiRepo;

describe('Given the component PokeList', () => {
  describe('When it will be instantiated ', () => {
    let renderedComponent: PokeList;
    beforeEach(() => {
      document.body.innerHTML = "<div class='poke-list'></div>";
      renderedComponent = new PokeList('.poke-list', repo);
    });
    test('Then it should be rendered', () => {
      expect(renderedComponent).toBeDefined();
    });

    test('Then the title "Poke List" should be visible for the user', () => {
      expect(screen.getByText(/Snorlax/i)).toBeTruthy();
    });
  });
});
