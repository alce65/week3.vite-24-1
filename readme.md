# Learning JS en la Web

Información y ejemplos del Bootcamp de ISDI-Coders

- TS: [TypeScript](https://www.typescriptlang.org/)
- TS en la Web -> Componentes
- Asincronía -> Promesas -> API Rest

## Configuración del entorno

Previamente instalados y configurados

- [Node.js](https://nodejs.org/es/)
- [Visual Studio Code](https://code.visualstudio.com/)
- [EsLint](https://eslint.org/)
- [Jest](https://jestjs.io/)


## Configuración del entorno con VITE

Instalación de VITE

```bash
npm create vite@latest <folder> --template vanilla-ts
```

Agregar .editorconfig
Agregar readme.md

Instalación / configuración de ESLint

```bash
npx eslint --init
npm i -D eslint-config-prettier
npm i @types/node
```

Añadimos en el fichero .eslintrc.json

```json
{
  "extends": ["xo", "prettier"]
}
```

Reescribimos el fichero .eslintrc.json

```json
{
  "env": {
    "browser": true,
    "es2021": true,
    "node": true,
    "jest": true
  },
  "extends": ["xo", "prettier"],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaVersion": "latest",
    "sourceType": "module"
  },
  "plugins": ["@typescript-eslint"],
  "rules": {
    "max-params": "off"
  }
}
```

Añadimos en el fichero .package.json

```json
  "prettier": {
    "singleQuote": true
  }
```

Instalación / configuración de Jest

```bash
  npm i -D jest ts-jest @types/jest
  npm i -D jest-ts-webcompat-resolver
  npm i -D identity-obj-proxy
```

Configuramos en el fichero eslint

```json
  "env": {
    ...
    "jest": true
  },
```


Configuramos en el fichero jest.config.js

```js
/** @type {import('ts-jest').JestConfigWithTsJest} */

export default {
  preset: 'ts-jest',
  // testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['dist'],
  resolver: 'jest-ts-webcompat-resolver',
  moduleNameMapper: {
    '\\.(css|scss)$': 'identity-obj-proxy',
  },
};
```

### Testing Library

```bash

npm i -D jest-environment-jsdom
npm i -D @testing-library/dom @testing-library/jest-dom testing-library/user-event
```

Añadimos en el fichero jest.config.js

```js
testEnvironment: 'jsdom',
```
