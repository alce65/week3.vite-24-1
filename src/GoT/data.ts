import { anyCharacter } from './model/character';
import { Counselor } from './model/counselor';
import { Fighter } from './model/fighter';
import { King } from './model/king';
import { Squire } from './model/squire';

//  - Joffrey Baratheon (rey),
//   - Jaime Lannister (luchador),
//   - Daenerys Targaryen (luchadora),
//   - Tyrion Lannister (asesor de Daenerys) y
//   - Bronn (escudero de Jaime).)

const joffrey = new King('Joffrey', 'Baratheon', 18, 2);
const jaime = new Fighter('Jaime', 'Lannister', 35, 'sword', 7);
const daenerys = new Fighter('Daenerys', 'Targaryen', 25, 'dragon', 10);
const tyrion = new Counselor('Tyrion', 'Lannister', 30, daenerys);
const bronn = new Squire('Bronn', 'Lannister', 35, jaime, 9);

export const characters2 = [joffrey, jaime, daenerys, tyrion, bronn];

export const characters: anyCharacter[] = [
  new King('Joffrey', 'Baratheon', 18, 2),
  new Fighter('Jaime', 'Lannister', 35, 'sword', 7),
  new Fighter('Daenerys', 'Targaryen', 25, 'dragon', 10),
];

characters.push(new Counselor('Tyrion', 'Lannister', 30, characters[2]));
characters.push(
  new Squire('Bronn', 'Lannister', 35, characters[1] as Fighter, 9)
);

console.log(JSON.parse(JSON.stringify(characters)));
