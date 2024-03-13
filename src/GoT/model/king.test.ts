import { King } from './king';

describe('Given class King', () => {
  describe('When it receives the parameters name: "Robert Baratheon", house: "Baratheon", age: 40, kingdomYears: 15', () => {
    const expectedKing = {
      name: 'Robert Baratheon',
      house: 'Baratheon',
      age: 40,
      isAlive: true,
      kingdomYears: 15,
      type: 'king',
      message: 'Vais a morir todos',
    };

    let king: King;

    beforeEach(() => {
      const name = 'Robert Baratheon';
      const house = 'Baratheon';
      const age = 40;
      const kingdomYears = 15;
      king = new King(name, house, age, kingdomYears);
    });

    test('Then it should return a new instance of King with name: "Robert Baratheon", house: "Baratheon", age: 40, kingdomYears: 15', () => {
      // Assert
      expect(king).toEqual(expectedKing);
    });

    test('When I use the method kill, alive should be false', () => {
      // Act
      king.kill();
      // Assert
      expect(king.isAlive).toBe(false);
    });

    test('When I use the method talk, it should return "Vais a morir todos"', () => {
      // Act
      const response = king.talk();
      // Assert
      expect(response).toBe('Vais a morir todos');
    });
  });
});
