import { PokeList } from './poke.list';
import { screen } from '@testing-library/dom';
import { MOCK_FULL_STATE } from '../../__mocks__/state';

describe('Given the component PokeList', () => {
  describe('When it will be instantiated ', () => {
    const state = MOCK_FULL_STATE;
    let renderedComponent: PokeList;
    beforeEach(() => {
      document.body.innerHTML = "<div class='poke-list'></div>";
      renderedComponent = new PokeList('.poke-list', state.pokeData, state);
    });
    test('Then it should be rendered', () => {
      expect(renderedComponent).toBeDefined();
    });

    test('Then the title "Poke List" should be visible for the user', () => {
      expect(screen.getByText(/Snorlax/i)).toBeTruthy();
    });
  });
});
