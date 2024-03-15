/* eslint-disable no-new */
import './pets.css';
import { Component } from '../../components/component';
import { Pet } from '../model/pet';
import { Card } from './card';
import { Add } from './add';
import { RepoPets } from '../repo.api';

export class Pets extends Component {
  pets: Pet[] = [];

  repo: RepoPets;

  constructor(selector: string) {
    super(selector);
    this.repo = new RepoPets();
    this.repo
      .getAll()
      .then((pets) => {
        this.pets = pets;
        this.render();
      })
      .catch((error) => {
        console.log((error as Error).message);
      });
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
    this.repo
      .update(pet)
      .then((pet) => {
        this.pets = this.pets.map((p) => (p.id === pet.id ? pet : p));
        console.log(this.pets);
      })
      .catch((error) => {
        console.log((error as Error).message);
      });
  }

  delete(pet: Pet) {
    this.repo
      .delete(pet)
      .then((pet) => {
        this.pets = this.pets.filter((p) => p.id !== pet.id);
        console.log(this.pets);
      })
      .catch((error) => {
        console.log((error as Error).message);
      });
  }

  add(pet: Omit<Pet, 'id'>) {
    this.repo
      .add(pet)
      .then((petWithId) => {
        this.pets = [...this.pets, petWithId];
        console.log(this.pets);
        new Card(
          '.pets__list',
          petWithId,
          'afterbegin',
          this.update.bind(this),
          this.delete.bind(this)
        );
      })
      .catch((error) => {
        console.log((error as Error).message);
      });
  }
}
