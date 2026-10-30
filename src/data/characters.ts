import type { Character } from '../types';

export const characters: Character[] = [
  {
    id: 1,
    name: 'Hermione Granger',
    actor: 'Emma Watson',
    gender: 'female',
    house: 'Gryffindor',
    wandCore: 'dragon heartstring',
    alive: true,
    image: 'https://upload.wikimedia.org/wikipedia/en/d/d3/Hermione_Granger_poster.jpg'
  },
  {
    id: 2,
    name: 'Draco Malfoy',
    actor: 'Tom Felton',
    gender: 'male',
    house: 'Slytherin',
    wandCore: 'unicorn tail-hair',
    alive: true,
    image: 'https://upload.wikimedia.org/wikipedia/en/1/16/Draco_Mal.JPG'
  },
  {
  id: 3,
  name: 'Harry Potter',
  actor: 'Daniel Radcliffe',
  gender: 'male',
  house: 'Gryffindor',
  wandCore: 'phoenix feather',
  alive: true,
  image: 'https://v1.popcornnews.ru/k2/news/1200/upload/news/9727_image_converted.jpg'
  },
  {
    id: 4,
    name: 'Ron Weasley',
    actor: 'Rupert Grint',
    gender: 'male',
    house: 'Gryffindor',
    wandCore: 'unicorn tail-hair',
    alive: true,
    image: 'https://upload.wikimedia.org/wikipedia/en/5/5e/Ron_Weasley_poster.jpg'
  }
];

export const houses = ['Gryffindor', 'Slytherin', 'Ravenclaw', 'Hufflepuff'];