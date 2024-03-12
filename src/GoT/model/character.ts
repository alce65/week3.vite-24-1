import { Counselor } from './counselor';
import { Fighter } from './fighter';
import { King } from './king';
import { Squire } from './squire';

export type anyCharacter = King | Fighter | Squire | Counselor;
type CharacterType = 'king' | 'fighter' | 'counselor' | 'squire';

export abstract class Character {
  static serie = 'Juego de Tronos';

  name: string;
  house: string;
  age: number;
  isAlive = true;
  type: CharacterType | '' = '';
  message = '';

  constructor(name: string, house: string, age: number) {
    this.name = name;
    this.house = house;
    this.age = age;
  }

  kill() {
    this.isAlive = false;
  }

  talk() {
    return this.message;
  }
}
