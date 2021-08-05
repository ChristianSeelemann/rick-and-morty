import './style.css';
import { createElement } from './utils/createElement';
import { characterCard } from './components/character/character';
import { getCharacters } from './utils/api';
import type { Character } from './types';

const app = document.querySelector<HTMLDivElement>('#app');

const characters: Character[] = await getCharacters('');

const characterContainer = createElement('main', {
  className: 'character',
  childElements: characters.map((character) => characterCard(character)),
});

const searchElement = createElement('input', {
  placeholder: 'Search your Charakter',
  className: 'search__input',
  oninput: async () => {
    const search = searchElement.value;
    const filteredCharacters = await getCharacters(search);
    const newCharacters = filteredCharacters.map((filteredCharacter) =>
      characterCard(filteredCharacter)
    );
    characterContainer.innerHTML = '';
    characterContainer.append(...newCharacters);
  },
});

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
          childElements: [searchElement],
        }),
      ],
    }),
    characterContainer,
  ],
});

if (app !== null) {
  app.append(page);
}
