import { screen } from '@testing-library/dom';
import '@testing-library/jest-dom';
import { Header } from './header';

describe('Given class Header', () => {
  describe('When it receives a selector and a title', () => {
    test('Then it should render a header element with a title', () => {
      // Arrange
      const selector = 'div';
      const title = 'My title';

      document.body.innerHTML = `<div></div>`;
      // Act
      const header = new Header(selector, title);
      const elementH1 = screen.getByRole('heading');
      // Assert

      expect(header).toBeInstanceOf(Header);
      expect(elementH1).toBeInTheDocument();
      expect(elementH1).toHaveTextContent(title);
    });
  });
});
