/* eslint-disable no-new */
import { Counter } from './components/counter';
import { Footer } from './components/footer';
import { Header } from './components/header';
import { Main } from './components/main';
import { Menu } from './components/menu';
import './styles.css';

new Header('.app');
new Menu('header');
new Main('.app');
new Counter('main');
new Counter('main');
new Footer('.app');
