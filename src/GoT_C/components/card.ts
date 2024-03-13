import { anyCharacter } from '../../GoT/model/character';
import { Counselor } from '../../GoT/model/counselor';
import { Fighter } from '../../GoT/model/fighter';
import { King } from '../../GoT/model/king';
import { Squire } from '../../GoT/model/squire';
import { Component } from './component';
import { Talk } from './talk';

const emojis = {
  king: '👑',
  fighter: '⚔️',
  counselor: '📜',
  squire: '🛡️',
};

export class Card extends Component {
  character: anyCharacter;

  constructor(selector: string, character: anyCharacter) {
    super(selector);
    this.character = character;
    this.render();
  }

  render(): void {
    this.template = this.createTemplate();
    super.render();
    this.element.querySelector('.talk')?.addEventListener('click', () => {
      console.log('Hola, soy ' + this.character.name);

      // eslint-disable-next-line no-new
      new Talk('body', this.character);
      setTimeout(() => {
        document.querySelector('.comunications')?.remove();
      }, 2000);
    });

    this.element.querySelector('.kill')?.addEventListener('click', () => {
      this.character.isAlive = false;
      this.element.querySelector('.character__status')!.innerHTML =
        this.renderLive(false);
    });
  }

  selectCharacterData = (character: anyCharacter) => {
    switch (character.type) {
      case 'king':
        return ` <li>Años de reinado: 
      ${(character as King).kingdomYears}</li>`;
      case 'fighter':
        return `<li>Arma:   ${(character as Fighter).weapon}</li>
            <li>Destreza: ${(character as Fighter).skillsRange}</li>`;
      case 'counselor':
        return `
            <li>Asesora a: ${(character as Counselor).lord.name}</li>`;
      case 'squire':
        return `
      <li>Peloteo: ${(character as Squire).serverRange}</li>
      <li>Sirve a: ${(character as Squire).master.name}</li>
      `;
      default:
        return '';
    }
  };

  renderLive(isAlive: boolean): string {
    return isAlive
      ? '<i class="fas fa-thumbs-up"></i>'
      : '<i class="fas fa-thumbs-down"></i>';
  }

  createTemplate() {
    const item = this.character;
    return `
    <li class="character col">
      <div class="card character__card">
        <img src="img/${item.name.toLowerCase()}.jpg" alt="Foto de ${
      item.name
    } ${item.house}" class="character__picture card-img-top" />
        <div class="card-body">
          <h2 class="character__name card-title h4">${item.name} ${
      item.house
    }</h2>
          <div class="character__info">
            <ul class="list-unstyled">
              <li>Edad: ${item.age} años</li>
              <li>
                Estado: <span class="character__status">
                  ${this.renderLive(item.isAlive)}
                </span>
              </li>
            </ul>
          </div>
          <div class="character__overlay">
            <ul class="list-unstyled">
              ${this.selectCharacterData(item)}
            </ul>
            <div class="character__actions">
              <button
              class="character__action btn talk">habla</button>
              <button 
              class="character__action btn kill">muere</button>
            </div>
          </div>
        </div>
        <i class="emoji">${emojis[item.type as keyof typeof emojis]}
        </i>
      </div>
    </li>
    `;
  }
}
