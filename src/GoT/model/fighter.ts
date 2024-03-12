/* eslint-disable max-params */
import { Character } from './character';

export class Fighter extends Character {
  weapon: string;
  skillsRange: number;
  constructor(
    name: string,
    house: string,
    age: number,
    weapon: string,
    skillsRange: number
  ) {
    super(name, house, age);
    this.weapon = weapon;
    this.skillsRange = skillsRange;
    this.type = 'fighter';
    this.message = 'Primero pego y luego pregunto';
  }
}
