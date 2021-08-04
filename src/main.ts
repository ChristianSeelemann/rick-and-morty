import './style.css';
import { createElement } from './utils/createElement';
import { characterCard } from './components/character/character';
import { Character } from './types';

const characters: Character[] = [
  {
    name: 'Morty Smith',
    thumbnail:
      'https://www.denofgeek.com/wp-content/uploads/2021/03/Rick-and-Morty-Season-5-Trailer.jpg?resize=768%2C432',
    status: 'Alive',
    species: 'Human',
    lastLocation: 'Earth (Replacement Dimension)',
    gender: 'Male',
  },
  {
    name: 'Morty Smith',
    thumbnail:
      'https://www.denofgeek.com/wp-content/uploads/2021/03/Rick-and-Morty-Season-5-Trailer.jpg?resize=768%2C432',
    status: 'Alive',
    species: 'Human',
    lastLocation: 'Earth (Replacement Dimension)',
    gender: 'Male',
  },
  {
    name: 'Morty Smith',
    thumbnail:
      'https://www.denofgeek.com/wp-content/uploads/2021/03/Rick-and-Morty-Season-5-Trailer.jpg?resize=768%2C432',
    status: 'Alive',
    species: 'Human',
    lastLocation: 'Earth (Replacement Dimension)',
    gender: 'Male',
  },
];

const app = document.querySelector<HTMLDivElement>('#app');

const page = createElement('div', {
  id: 'page',
  childElements: [
    createElement('header', {
      childElements: [
        createElement('section', {
          className: 'header__heading',
          childElements: [
            createElement('img', {
              src: './src/assets/Header_BG.svg',
              className: 'header__svg',
            }),
            createElement('img', {
              src: './src/assets/Rick_and_Morty.svg',
              className: 'logo__img',
            }),
            createElement('h2', {
              innerText: 'Fanpage',
            }),
          ],
        }),
        createElement('section', {
          className: 'search',
          childElements: [
            createElement('input', {
              placeholder: 'Search your Charakter',
              className: 'search__input',
            }),
          ],
        }),
      ],
    }),
    createElement('main', {
      className: 'character',
      childElements: characters.map((character) => characterCard(character)),
    }),
  ],
});

if (app !== null) {
  app.append(page);
}
