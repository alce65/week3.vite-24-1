import './card.css';
import { Component } from '../../components/component';
import { Pet } from '../model/pet';

export class Card extends Component {
  pet: Pet;
  update: (_pet: Pet) => void;
  delete: (_pet: Pet) => void;
  // eslint-disable-next-line max-params
  constructor(
    selector: string,
    pet: Pet,
    // eslint-disable-next-line no-undef
    position: InsertPosition | null,
    update: (_pet: Pet) => void,
    deletePet: (_pet: Pet) => void
  ) {
    super(selector);
    this.pet = pet;
    this.update = update;
    this.delete = deletePet;
    this.render(position || 'beforeend');
  }

  replace() {
    this.template = this.createTemplate();
    super.replace();
  }

  // eslint-disable-next-line no-undef
  render(position?: InsertPosition) {
    this.template = this.createTemplate();
    super.render(position);
    const adoptForm =
      this.element.querySelector<HTMLFormElement>('.pets__adopt');
    if (adoptForm) {
      adoptForm.addEventListener('submit', (event: Event) => {
        event.preventDefault();
        this.pet.adopter = (adoptForm.elements[0] as HTMLInputElement).value;
        this.pet.isAdopted = true;
        this.update(this.pet);
        this.replace();
      });
    }

    const deleteButton =
      this.element.querySelector<HTMLButtonElement>('.pets__delete');
    if (deleteButton) {
      deleteButton.addEventListener('click', () => {
        this.delete(this.pet);
        this.element.remove();
      });
    }
  }

  renderAdoptar() {
    return `
      <details class="pets__adopter">
        <summary>¿Lo quieres adoptar?</summary>
        <form class="pets__adopt">
          <input type="text" class="pets__adopter-input" placeholder="Adopter name" required />
          <button type="submit">Adoptar</button>
        </form>
      </details>
    `;
  }

  createTemplate() {
    return `
    <li class="pets__item">
      <img height="300" width="300"
        class="pets__image"
        src="${this.pet.image}"
        alt="${this.pet.name}"
      />
      <h3 class="pets__name">${this.pet.name}</h3>
      <p class="pets__breed">${this.pet.breed}</p>
      
      ${
        this.pet.isAdopted
          ? `<p class="pets__adopter">Adoptado por: ${this.pet.adopter}</p>`
          : this.renderAdoptar()
      }
      <div>
        <button class="pets__delete">Eliminar</button>
      </div>
      
    </li>
    `;
  }
}
