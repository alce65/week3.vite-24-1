import { Component } from './component';

export class Footer extends Component {
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
