import { Component } from '../../components/component';
import { PokemonDetails } from '../models/pokemon';
import { PokemonApiRepo } from '../repo/poke.api.repo';
import { detailUrlParse } from '../services/helpers';

export class PokeDetail extends Component {
  private pokeId: number;
  private pokeData!: PokemonDetails;

  // eslint-disable-next-line no-unused-vars
  constructor(selector: string, private repo: PokemonApiRepo) {
    super(selector);
    const { pokeId } = detailUrlParse();
    const url = `
      https://pokeapi.co/api/v2/pokemon/${pokeId}/`;
    this.pokeId = pokeId;

    this.repo.getPokemonDetails(url).then((data) => {
      this.pokeData = data;
      this.render();
    });
  }

  render() {
    this.template = this.createTemplate();
    const element = super.render();
    // TEMP this.children.push(
    //   new FavoriteIcon('.poke-item__fav', this.state, this.pokeId)
    // );
    return element;
  }

  private createTemplate() {
    let template = `
            <h2 class="detail-title">
                <span>Detalles del Pokemon ${this.pokeId}:</span>
                <span class="detail-title__poke-name">
                    ${this.pokeData.name}
                </span>
                <span class="poke-item__fav"></span>
            </h2>
            <div class="poke-detail">`;
    template += `<ul>${this.showPokeData(this.pokeData)}</ul>`;
    template += `</div>`;
    return template;
  }

  private showPokeData(poke: { [key: string]: any }) {
    let template = '';
    for (const key in poke) {
      if (Object.hasOwn(poke, key) && key !== 'name') {
        const value = poke[key];
        if (typeof value === 'object') {
          template += `<li>
                        <details>
                        <summary>${key}:</summary>
                        <ul>${this.showPokeData(value)}</ul>
                        </details>
                    </li>`;
        } else {
          template += `<li><span>${key}</span>: ${value}</li>`;
        }
      }
    }

    return template;
  }
}
