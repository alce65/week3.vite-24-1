/* eslint-disable no-new */
import { Counter } from './components/counter';
import { Footer } from './components/footer';
import { Greetings } from './components/greetings';
import { Header } from './components/header';
import { Main } from './components/main';
import { Menu } from './components/menu';
import './styles.css';

const title = 'Learning TS Components';

new Header('.app', title);
new Menu('header');
new Main('.app');
new Counter('main');
new Counter('main');
new Greetings('main');
new Footer('.app');
