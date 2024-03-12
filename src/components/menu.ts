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
        path: 'vite.html',
        label: 'Vite Sample',
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
