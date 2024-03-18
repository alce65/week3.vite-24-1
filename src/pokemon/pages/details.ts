import './details.page.css';
import { Component } from '../../components/component';
import { PokeDetail } from '../components/poke.detail';
import { PokemonApiRepo } from '../repo/poke.api.repo';

export class DetailsPage extends Component {
  constructor(selector: string) {
    super(selector);
    this.render();
  }

  render() {
    this.template = this.createTemplate();
    super.render();
    // eslint-disable-next-line no-new
    new PokeDetail('.poke-detail', new PokemonApiRepo());
  }

  private createTemplate() {
    return `
      <section class="poke-detail">
        <header>
          <h2 aria-label="Details">Pokemon Detail</h2>
        <a href="javascript:history.back()"">Back</a>
        </header>

      
      </section>
    `;
  }
}
