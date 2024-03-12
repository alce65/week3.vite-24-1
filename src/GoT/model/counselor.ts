import { Character, anyCharacter } from './character';

export class Counselor extends Character {
  lord: anyCharacter;
  constructor(name: string, house: string, age: number, lord: anyCharacter) {
    super(name, house, age);
    this.lord = lord;
    this.type = 'counselor';
    this.message = 'No sé por qué, pero creo que voy a morir pronto';
  }
}
