/* eslint-disable no-new */
import { Footer } from '../components/footer';
import { Header } from '../components/header';
import { Main } from '../components/main';
import { Menu } from '../components/menu';
import '../styles.css';
import { Pets } from './components/pets';

const title = 'Pets Challenge';
new Header('.app', title);
new Menu('header');
new Main('.app');
new Pets('main');
new Footer('.app');
