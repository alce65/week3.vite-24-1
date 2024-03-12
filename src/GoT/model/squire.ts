/* eslint-disable max-params */

import { Character } from './character';
import { Fighter } from './fighter';

export class Squire extends Character {
  master: Fighter;
  serverRange: number;
  constructor(
    name: string,
    house: string,
    age: number,
    master: Fighter,
    serverRange: number
  ) {
    super(name, house, age);
    this.master = master;
    this.serverRange = serverRange;
    this.type = 'squire';
    this.message = 'Soy un loser';
  }
}
