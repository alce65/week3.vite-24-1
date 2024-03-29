import './menu.css';
import { Component } from './component';

export class Menu extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(selector: string) {
    super(selector);
    this.template = this.createTemplate();
    this.render();
  }

  createTemplate() {
    const menuOptions = [
      {
        path: 'index.html',
        label: 'Home',
      },
      {
        path: 'got.html',
        label: 'GoT',
      },
      {
        path: 'got-c.html',
        label: 'GoT C',
      },
      {
        path: 'pets.html',
        label: 'Pets',
      },
      {
        path: 'vite.html',
        label: 'Vite Sample',
      },
      {
        path: 'pokemon.html',
        label: 'Pokemons',
      },
    ];

    return `
    <nav>
      <ul>
        ${menuOptions
          .map(
            (option) => `<li><a href="${option.path}">${option.label}</a></li>`
          )
          .join('')}
      </ul>
    </nav>
    `;
  }
}
