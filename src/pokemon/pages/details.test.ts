import { screen } from '@testing-library/dom';
import '@testing-library/jest-dom';
import { DetailsPage } from './details';
import { PokeDetail } from '../components/poke.detail';

jest.mock('../repo/poke.api.repo');
jest.mock('../components/poke.detail');

describe('Given "DetailsPage" component', () => {
  document.body.innerHTML = `<main></main>`;

  const pokeDetailsPage = new DetailsPage('main');
  const pokeElements = [
    screen.getByRole('heading', { name: 'Details' }), // <h2>
  ];
  describe('When it is call with a DOM implementation', () => {
    test('Then we should to be able to instantiate it', () => {
      expect(pokeDetailsPage).toBeInstanceOf(DetailsPage);
      expect(PokeDetail).toHaveBeenCalled();
    });
    test.each(pokeElements)(`Then H2 should be render`, (element) => {
      expect(element).toBeInstanceOf(HTMLElement);
      expect(element).toBeInTheDocument();
    });
  });
});
