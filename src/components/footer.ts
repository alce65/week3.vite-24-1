import { Component } from './component';

export class Footer extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(selector: string) {
    super(selector);
    this.template = this.createTemplate();
    this.render();
  }

  createTemplate() {
    return `
    <footer class="footer">
      <address class="footer__text">ISDI Coders</address>
    </footer>
    `;
  }
}
