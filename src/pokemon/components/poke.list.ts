/* eslint-disable no-unused-vars */

import { Component } from '../../components/component';
import { Pokemon } from '../models/pokemon';
import { PokemonApiRepo } from '../repo/poke.api.repo';
import { StateStructure } from '../types/state';
import { PokeItem } from './poke.item';

export class PokeList extends Component {
  state: StateStructure | null = null;
  constructor(
    public selector: string,
    private repo: PokemonApiRepo // ALT private state: any // State
  ) {
    super(selector);
    this.repo.getAllPokemons().then((data) => {
      this.state = data;
      this.render();
    });
  }

  render() {
    this.template = this.createTemplate();
    super.render();
    this.state?.pokeData.forEach(
      (poke: Pokemon) => new PokeItem('.poke-list__list', poke)
    );

    this.element.querySelectorAll('.pagination__button').forEach((button) => {
      button?.addEventListener('click', (e) => {
        const target = e.target as HTMLElement;
        const { id } = target.dataset;
        if (id === 'prev') {
          console.log('prev');
          if (!this.state?.previousUrl) return;
          this.repo.getAllPokemons(this.state?.previousUrl).then((data) => {
            this.state = data;
            this.element.remove();
            this.render();
          });
        } else {
          console.log('next');
          if (!this.state?.nextUrl) return;
          this.repo.getAllPokemons(this.state?.nextUrl).then((data) => {
            this.state = data;
            this.element.remove();
            this.render();
          });
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
    const final = this.state?.nextUrl
      ? this.state.nextUrl.split('=')[1].split('&')[0]
      : this.state?.count;
    const initial = Number(final) - 19;
    const paginationText = `${initial} - ${final} / ${this.state?.count}`;

    const template = `
    <section class="poke-container">
      <h2>Lista de Pokemons (${paginationText})</h2>
      <ul class="poke-list__list"></ul>
      <div class="pagination">
         <button class="pagination__button 
         ${this.state?.previousUrl || 'isHidden'}" type="button" data-id="prev">
              <i class="fas fa-backward" data-id="prev"></i>
              <span data-id="prev">Anterior</span>
          </button>
          <button class="pagination__button 
           ${this.state?.nextUrl || 'isHidden'}" type="button" data-id="next">
              <span data-id="next">Siguiente</span>
              <i class="fas fa-forward" data-id="next"></i>
          </button>
      </div>
    </section>
    `;
    return template;
  }
}
