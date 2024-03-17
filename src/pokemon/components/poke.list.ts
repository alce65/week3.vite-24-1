/* eslint-disable no-unused-vars */

import { Component } from '../../components/component';
import { Pokemon } from '../models/pokemon';
import { PokemonApiRepo } from '../repo/poke.api.repo';
import { PokeItem } from './poke.item';

export class PokeList extends Component {
  constructor(
    public selector: string,
    private pokeData: Array<Pokemon>,
    private repo: PokemonApiRepo // ALT private state: any // State
  ) {
    super(selector);
    this.repo.getAllPokemons();
    this.render();
  }

  render() {
    this.template = this.createTemplate();
    this.element = document.querySelector(this.selector) as HTMLElement;
    super.render();
    this.pokeData.forEach(
      (poke: Pokemon) => new PokeItem('.poke-list__list', poke)
    );

    this.element.querySelectorAll('.pagination__button').forEach((button) => {
      button?.addEventListener('click', (e) => {
        const target = e.target as HTMLElement;
        const { id } = target.dataset;
        if (id === 'prev') {
          // Future this.state.prev();
          console.log('prev');
        } else {
          // Future this.state.next();
          console.log('next');
        }
      });
    });
  }

  // TEMP private manageComponent() {
  //   const componentElement = this.element as HTMLElement;
  //   console.log('componentElement', componentElement);
  //    const icons = [
  //     ...componentElement.querySelectorAll('.poke-item__fav'),
  //   ] as Array<HTMLElement>;
  //   icons.forEach((icon) => {
  //     this.children.push(
  //       new FavoriteIcon(
  //         '#' + icon.id,
  //         this.state,
  //         +(icon.dataset.id as string)
  //       )
  //     );
  //   });
  // }

  createTemplate() {
    // Alt const final = this.state.nextUrl
    //   ? this.state.nextUrl.split('=')[1].split('&')[0]
    //   : this.state.count;
    // const initial = +final - 19;
    // const paginationText = `${initial} - ${final} / ${this.state.count}`;
    //
    // const template = `
    //         <h2>Lista de Pokemons (${paginationText})</h2>
    //         <ul class="poke-list__list"></ul>
    //         <div class="pagination"></div>`;

    const template = `
      <h2>Lista de Pokemons </h2>
      <ul class="poke-list__list"></ul>
      <div class="pagination">
         <button class="pagination__button isHidden" type="button" data-id="prev">
              <i class="fas fa-backward" data-id="prev"></i>
              <span data-id="prev">Anterior</span>
          </button>
          <button class="pagination__button" type="button" data-id="next">
              <span data-id="next">Siguiente</span>
              <i class="fas fa-forward" data-id="next"></i>
          </button>
      </div>
    `;
    return template;
  }
}
