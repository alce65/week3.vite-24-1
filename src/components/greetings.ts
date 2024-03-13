import { Component } from './component';

export class Greetings extends Component {
  user: string;
  message: string;
  constructor(selector: string) {
    super(selector);
    this.user = '';
    this.message = 'Hola, amigo';
    this.render();
  }

  render(): void {
    this.template = this.createTemplate();
    super.render();

    const button = this.element.querySelector('button');
    if (button) {
      button.addEventListener('click', () => {
        this.user = '';
        this.message = 'Hola, amigo';
        this.unRender();
        this.render();
      });
    }

    const input = this.element.querySelector('input');
    if (input) {
      input.addEventListener('input', (event: Event) => {
        const target = event.target as HTMLInputElement;
        this.user = target.value;
        this.message = `Hola, ${this.user}`;
        this.element.querySelector('p')!.innerHTML = this.message;
      });
    }
  }

  createTemplate() {
    return `
    <section aria-label="greetings">
      <p>${this.message}</p>
      <div>
        <input type="text" placeholder="Dime tu nombre">
      </div>
      <button>Borrar</button>
    </section>
    `;
  }
}
