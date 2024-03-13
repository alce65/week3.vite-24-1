import { Component } from './component';

export class Got extends Component {
  constructor(selector: string) {
    super(selector);
    this.template = this.createTemplate();
    this.render();
  }

  createTemplate() {
    return `
      <div class="app container">
        <h1>Game of Thrones</h1>
        <ul class="characters-list row list-unstyled">
        </ul>
      </div>
    `;
  }
}
