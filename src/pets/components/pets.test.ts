import { screen } from '@testing-library/dom';
import '@testing-library/jest-dom';
import { Pets } from './pets';
import { getPets } from '../data';
import { Pet } from '../model/pet';

jest.mock('../data');

const mockData: Pet[] = [
  {
    id: '1',
  } as Pet,
  {
    id: '2',
  } as Pet,
];

Object.defineProperty(globalThis, 'crypto', {
  value: {
    randomUUID: () => '1234',
  },
});

describe('Given Pets component', () => {
  (getPets as jest.Mock).mockReturnValue(mockData);
  document.body.innerHTML = `<div></div>`;

  let component: Pets;
  beforeEach(() => {
    component = new Pets('div');
  });

  describe('When we instantiate it', () => {
    test('Then it should render a section with a title and a list', () => {
      // Assert
      const section = screen.getByRole('region');
      expect(section).toBeInTheDocument();
      expect(section).toHaveClass('pets');
      expect(screen.getByRole('list')).toBeInTheDocument();
    });
  });

  describe('When we add a pet', () => {
    test('Then it should add the pet to the list', () => {
      // Arrange
      const pet = { id: '3' } as Pet;
      // Act
      component.add(pet);
      // Assert
      expect(component.pets).toEqual([...mockData, pet]);
    });
  });
  describe('When we update a pet', () => {
    test('Then it should update the pet in the list', () => {
      // Arrange
      const pet = { id: '1', name: 'Firulais' } as Pet;
      // Act
      component.update(pet);
      // Assert
      expect(component.pets[0]).toEqual(pet);
    });
  });
  describe('When we delete a pet', () => {
    test('Then it should remove the pet from the list', () => {
      // Arrange

      const pet = { id: '1' } as Pet;
      // Act
      component.delete(pet);
      // Assert
      expect(component.pets.length).toEqual(1);
    });
  });
});
