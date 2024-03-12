import './style.scss';
import typescriptLogo from './typescript.svg';
import viteLogo from '/vite.svg';
import { setupCounter } from './counter.ts';

const appRootElement = document.querySelector<HTMLDivElement>('#app');

const header = `
  <header>
    <nav>
      <a href="https://vitejs.dev" target="_blank">
        <img src="${viteLogo}" class="logo" alt="Vite logo" />
      </a>
      <a href="https://www.typescriptlang.org/" target="_blank">
        <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
      </a>
    </nav>
    <h1>Coders: Vite + TypeScript</h1>
  </header>
`;

const main = `
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>
`;

const footer = `
  <footer>
    <address>ISDI Coders</address>
  </footer>  
  `;

appRootElement!.innerHTML = header + main + footer;

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!);
