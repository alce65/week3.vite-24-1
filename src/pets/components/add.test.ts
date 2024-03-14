import { screen } from '@testing-library/dom';
import { userEvent } from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { Add } from './add';

describe('Given the Add component', () => {
  const addMock = jest.fn();

  Object.defineProperty(globalThis, 'crypto', {
    value: {
      randomUUID: () => '1234',
    },
  });

  describe('When it is rendered', () => {
    test('Then it should have a form', () => {
      // Arrange
      document.body.innerHTML = `<div></div>`;
      // Act
      const component = new Add('div', addMock);
      // Assert
      expect(component).toBeDefined();
      expect(screen.getByRole('form')).toBeInTheDocument();
    });

    test('Then it should be completed and submit', async () => {
      // Arrange
      document.body.innerHTML = `<div></div>`;
      const component = new Add('div', addMock);
      const inputs = screen.getAllByRole('textbox');

      // Act
      await userEvent.type(inputs[0], 'Firulais');
      await userEvent.type(inputs[1], 'Perro');
      await userEvent.click(screen.getByRole('button'));
      // Assert
      expect(component).toBeDefined();
      expect(addMock).toHaveBeenCalled();
    });
  });
});
