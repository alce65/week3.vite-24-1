import { PokeDetail } from './poke.detail';
import { screen } from '@testing-library/dom';

import { PokemonDetails } from '../models/pokemon';
import { PokemonApiRepo } from '../repo/poke.api.repo';
// Alt import { MOCK_FULL_STATE } from '../../__mocks__/state';
// import { MOCK_POKE_FULL } from '../../__mocks__/mock';

const MOCK_POKE_FULL: PokemonDetails = {
  id: 143,
  name: 'snorlax',
  url: 'https://pokeapi.co/api/v2/pokemon/143/',
} as unknown as PokemonDetails;

const repo: PokemonApiRepo = {
  getPokemonDetails: jest.fn().mockResolvedValue(MOCK_POKE_FULL),
} as unknown as PokemonApiRepo;

describe('Given the component PokeDetail', () => {
  describe('When it will be instantiated ', () => {
    let renderedComponent: PokeDetail;
    beforeEach(() => {
      document.body.innerHTML = "<div class='poke-detail'></div>";
      renderedComponent = new PokeDetail('.poke-detail', repo);
    });
    test('Then it should be rendered', () => {
      expect(renderedComponent).toBeDefined();
    });

    test('Then the title "Detalles del Pokemon" should be visible for the user', () => {
      expect(screen.getByText(/Detalles del Pokemon/i)).toBeTruthy();
    });

    test('Then the Pokemon name should be visible for the user', () => {
      expect(screen.getByText(/Snorlax/i)).toBeTruthy();
    });
  });
});
