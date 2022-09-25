// DISTINTAS IMPORTACIONES
// import { heroes } from './data/heroes';
// import { heroes } from './data/heroes';
// import heroes, { owners } from '../data/heroes';

// array de objetos
const heroes = [
  //heroe 1
  {
    id: 1,
    name: "Bruce Wayne",
    owner: "DC",
  },
  //   heroe 2
  {
    id: 2,
    name: "Clark Kent",
    owner: "MARVEL",
  },
];

// console.log( owners );

// BUSCADOR DE HEROE POR ID EN UN OBJETO
export const getHeroeById = (id) => heroes.find((heroe) => heroe.id === id);
// console.log(getHeroeById(2));
// console.log( getHeroeById(2) );

// find?, filter
// BUSCADOR DE HEROE POR ID EN UN OBJETO
export const getHeroesByOwner = (owner) =>
  heroes.filter((heroe) => heroe.owner === owner.toUpperCase());

// console.log(getHeroesByOwner("marvel"));
