import { screen } from '@testing-library/dom';
import '@testing-library/jest-dom';
import { MOCK_POKE } from '../../__mocks__/mock';
import { PokeItem } from './poke.item';

describe('Given "PokeItem" component', () => {
  document.body.innerHTML = `<slot></slot>`;
  const pokeItem = new PokeItem('slot', MOCK_POKE);
  const elements = [
    screen.getByRole('listitem'),
    screen.getByRole('link'),
    ...screen.getAllByRole('img'),
  ];

  describe('When it is call with a DOM implementation', () => {
    test('Then we should to be able to instantiate it', () => {
      expect(pokeItem).toBeInstanceOf(PokeItem);
    });

    test.each(elements)(
      `Then the elements should be render`,
      (element: HTMLElement) => {
        expect(element).toBeInstanceOf(HTMLElement);
        expect(element).toBeInTheDocument();
      }
    );
  });
});
