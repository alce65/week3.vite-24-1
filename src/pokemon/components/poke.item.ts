import './poke.item.css';
import { Component } from '../../components/component';
import { Pokemon } from '../models/pokemon';

export class PokeItem extends Component {
  // eslint-disable-next-line no-unused-vars
  constructor(public selector: string, private poke: Pokemon) {
    super(selector);
    this.render();
  }

  render() {
    this.template = this.createTemplate();
    super.render();

    const favIcon = this.element.querySelector(
      '.poke-item__fav'
    ) as HTMLElement;
    favIcon.addEventListener('click', () => {
      this.poke.isFavorite = !this.poke.isFavorite;
      favIcon.querySelector('i')?.classList.toggle('fas');
      favIcon.querySelector('i')?.classList.toggle('far');
      console.log(this.poke);
    });
  }

  private createTemplate() {
    return `
        <li class="poke-item">
          <a class="poke-item__link" href='./detail.html?id=${
            this.poke.id
          }&origin=${this.selector}'>
              <div class="poke-item__header">
                <span class="poke-item__link-label">${this.poke.name}</span>
                <span class="poke-item__link-sprite">
                    <img class="poke-item__link-sprite-front"
                    src="${this.poke.sprites?.front_default}" alt="${
      this.poke.name
    }">
                    <img class="poke-item__link-sprite-back"
                    src="${this.poke.sprites?.back_default}" alt="${
      this.poke.name
    }">
                </span>              
              </div>
              <div class="poke-item__data">
                <span>Altura: ${this.poke.height} cm</span>
                <span>Peso: ${
                  this.poke.weight < 1000
                    ? this.poke.weight + ' g'
                    : this.poke.weight / 1000 + ' kg'
                }</span>
              </div>
          </a>
          <span class="poke-item__fav" data-id="${this.poke.id}" >
            <i role="button" class="icon--score 
            ${this.poke.isFavorite ? 'fas' : 'far'}            
            fa-heart"></i>
          </span>
        </li>`;
  }
}
