/* eslint-disable no-new */
import { Card } from './components/card';
import { Got } from './components/got';
import './styles.css';
console.log('Hello, GoT_Components!');
import { characters } from '../GoT/data';

new Got('body');

characters.forEach((character) => {
  new Card('.characters-list', character);
});
