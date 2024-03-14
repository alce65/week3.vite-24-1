/* eslint-disable no-new */
import './pets.css';
import { Component } from '../../components/component';
import { getPets } from '../data';
import { Pet } from '../model/pet';
import { Card } from './card';
import { Add } from './add';

export class Pets extends Component {
  pets: Pet[];
  constructor(selector: string) {
    super(selector);
    this.pets = getPets();

    this.render();
  }

  render() {
    this.template = this.createTemplate();
    super.render();

    new Add('.pets__add', this.add.bind(this));
    this.pets.forEach((pet) => {
      new Card(
        '.pets__list',
        pet,
        null,
        this.update.bind(this),
        this.delete.bind(this)
      );
    });
  }

  createTemplate() {
    return `
    <section class="pets" aria-label="Pets">
      <div class="pets__add"></div>
      <h2 class="pets__title">Mascotas</h2>
      <ul class="pets__list">
      </ul>
    </section>
    `;
  }

  update(pet: Pet) {
    this.pets = this.pets.map((p) => (p.id === pet.id ? pet : p));
    console.log(this.pets);
    localStorage.setItem('pets', JSON.stringify(this.pets));
  }

  delete(pet: Pet) {
    this.pets = this.pets.filter((p) => p.id !== pet.id);
    console.log(this.pets);
    localStorage.setItem('pets', JSON.stringify(this.pets));
  }

  add(pet: Pet) {
    this.pets = [...this.pets, pet];
    console.log(this.pets);
    localStorage.setItem('pets', JSON.stringify(this.pets));
    new Card(
      '.pets__list',
      pet,
      'afterbegin',
      this.update.bind(this),
      this.delete.bind(this)
    );
  }
}
