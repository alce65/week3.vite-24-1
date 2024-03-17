# Week 3 - Challenge WeekEnd

![Logo Pokémon](pokemon-logo.svg)

## Pokémon

Esta aplicación tendrá inicialmente 2 páginas:

- Todos los pokémon
- Detalle de pokémon

El listado de todos los pokémon se alimentará de la [PokéAPI](https://pokeapi.co/), y deberá ir paginado. El listado incluirá el nombre del pokemon y **su imagen** y deberá ir acompañado de dos botones, para avanzar y retroceder de página. También debe mostrar el total de pokèmon mostrados vs. el total de pokèmon que existen (p.e. 10/1000).

El usuario debería poder ir al detalle de un pokémon, donde se le mostrarán más datos.
A esta página de detalle se llega pasando una id por la URL (la id del pokémon que queremos ver).

## Extra

Añadir una tercera página:

- Mis pokémon

El usuario debe poder añadir los pokémon que quiera a su listado local. El listado de Mis pokémon se alimentará de [una API local/privada]. El usuario debería poder eliminar pokémon de su listado local, y también modificar algún/unos dato/s.

Desde los favoritos, también se puede acceder a la página de detalle. 

## Features

Opcional: BEM + sass
Vite
HTML semántico
Testing

Pista Promise.all(), Promise.race()...

## Desarrollo

- Crear un proyecto con Vite / incorporar una página a un proyecto de Vite existente.
- En la página pokemon.html incluir

  - link al favicon
  - link a la tipografía y fuentes de iconos
  - una cabecera (header) con el logo de Pokémon y el título de la página -> futuro componente

### Datos

- Crear un modelo de datos para los pokémon a partir de los datos recibidos en la PokeAPI.

  - Obtener los datos de la PokeAPI en el navegador / Postman
  - Utilizamos la url `https://pokeapi.co/api/v2/pokemon` para obtener los datos de los pokémon. 
  - La respuesta es un objeto con una propiedad `results` que es un array de objetos con la información de los pokémon.
  - A partir de este objeto creamos un tipo/interface para la respuesta de la API.

    ```typescript
    export type PokemonResponse = {
      count: number;
      next: string | null;
      previous: string | null;
      results: PokemonBase[];
    }

    export type PokemonBase {
      name: string;
      url: string;
    }
    ```

  - Repetimos el proceso con la url de detalle de un pokémon incluida en results
  `https://pokeapi.co/api/v2/pokemon/{id}`.
  - Creamos un tipo/interface **PokemonDetail** para la respuesta de la API. Como es muy compleja utilizamos alguna herramienta para generarla automáticamente, e.g. JSON to TS. (alt-shift-ctrl-v en VSCode)

  - Finalmente creamos un tipo/interface **Pokemon** que incluye los datos que necesitamos para mostrar en la lista de pokémon.

    ```typescript
    export type Pokemon = {
      id: number;
      name: string;
      image: string;
      ...
    }
    ```

- Crear un mock de datos que devuelva un array de pokémon (type Pokemon) con los datos necesarios para mostrar en la lista de pokémon.

### Listado de pokémon inicial

- Crear un componente para mostrar la lista de pokémon (**poke.list**).
  - Titulo
  - Grid para los pokémon
  - Botones de paginación
- Crear un componente para cada item de la lista de pokémon (**poke.item**).
  - Titulo (Nombre del pokémon)
  - Imagen frontal/posterior del pokémon
  - Altura y peso del pokémon
  - Icono de favorito (corazón vacío o lleno)
- Iterar el array de pokémon y mostrar un componente por cada pokémon.

En el componente **poke.item**: implementamos la respuesta al click en el corazón para añadir o eliminar el pokémon de favoritos. (Solo localmente, en el componente)

### Datos reales desde la API

- Crear un servicio para obtener los datos de la PokeAPI.
- Almacenar los datos como el estado de la aplicación.

### Paginación

### Detalle de pokémon

- Crear un componente para mostrar el detalle de un pokémon.
