import './add.css';
import { Component } from '../../components/component';
import { Pet } from '../model/pet';

export class Add extends Component {
  add: (_pet: Omit<Pet, 'id'>) => void;
  constructor(selector: string, add: (_pet: Omit<Pet, 'id'>) => void) {
    super(selector);
    this.add = add;
    this.template = this.createTemplate();
    this.render();
  }

  onSubmit(event: Event) {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData) as { [k: string]: string };
    const newPet: Omit<Pet, 'id'> = {
      name: data.name,
      breed: data.species,
      isAdopted: false,
      adopter: '',
      image:
        (data.img as string) ||
        `https://source.unsplash.com/random/300x300/?${data.species.toLowerCase()}`,
    };
    form.reset();
    this.element.removeAttribute('open');
    this.add(newPet);
  }

  render() {
    super.render();
    this.element.addEventListener('submit', this.onSubmit.bind(this));
  }

  createTemplate() {
    return `
    <details class="add">
      <summary>
        <h2 class="add__title">Añadir mascota</h2>
      </summary>
      <form class="add__form" aria-label="form-add-pets">
        <div class="control_group">
          <label for="name">Nombre</label>
          <input type="text" id="name" name="name" required>
        </div>
        <div class="control_group">
          <label for="species">Especie</label>
          <input type="text" id="species" name="species" required>      
        </div>
        <div class="control_group">
          <label for="img">URL Image</label>
          <input type="string" id="img" name="img">
        </div>
        <button type="submit">Añadir</button>
      </form>
    </details>
    
    `;
  }
}
