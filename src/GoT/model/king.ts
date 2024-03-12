import { Character } from './character';

export class King extends Character {
  kingdomYears: number;
  constructor(name: string, house: string, age: number, kingdomYears: number) {
    super(name, house, age);
    // Lo que hace super es llamar al constructor de la clase padre,
    // en este caso Character
    // this.name = name;
    // this.house = house;
    // this.age = age;
    this.kingdomYears = kingdomYears;

    this.type = 'king';
    this.message = 'Vais a morir todos';
  }
}
