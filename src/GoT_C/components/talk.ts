import { anyCharacter } from '../../GoT/model/character';
import { Component } from './component';

export class Talk extends Component {
  character: anyCharacter;
  constructor(selector: string, character: anyCharacter) {
    super(selector);
    this.character = character;
    this.template = this.createTemplate();
    this.render();
  }

  createTemplate() {
    return `
    <div class="comunications on">
      <p class="comunications__text display-1">${this.character.talk()}</p>
      <img class="comunications__picture" src="img/${this.character.name.toLowerCase()}.jpg" 
      alt="Foto de ${this.character.name} ${this.character.house}" />
    `;
  }
}
