import { Component } from './component';

export class Counter extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(selector: string) {
    super(selector);
    this.template = this.createTemplate();
    this.render();
  }

  render(): void {
    super.render();
    this.element
      .querySelectorAll('button')
      .forEach((item) => item.addEventListener('click', this.handleClick));
  }

  private handleClick = (event: Event): void => {
    const target = event.target as HTMLButtonElement;
    const count = this.element.querySelector('span') as HTMLSpanElement;
    const { value } = target.dataset;
    const newValue = Number(count.textContent) + Number(value);
    count.textContent = newValue.toString();
  };

  createTemplate() {
    return `
    <div>
      <h2>Counter</h2>
      <div>
        <button data-value="-1">➖</button>
        <span>0</span>
        <button data-value="1">➕</button>
      </div>
    </div>
    `;
  }
}
