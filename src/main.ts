import './style.css';
import { createElement } from './utils/createElement';
import { characterCard } from './components/character/character';

const app = document.querySelector<HTMLDivElement>('#app');

const page = createElement('div', {
  id: 'page',
  childElements: [
    createElement('header', {
      childElements: [
        createElement('img', {
          src: './src/assets/Rick_and_Morty.svg',
          className: 'logo__img',
        }),
        createElement('h2', {
          innerText: 'Fanpage',
          className: 'headline__h2',
        }),
      ],
    }),
    createElement('main', {
      childElements: [
        createElement('input', {
          placeholder: 'Search your Charakter',
          className: 'searchInput',
        }),
      ],
    }),
  ],
});

if (app !== null) {
  app.append(page);
  app.append(characterCard());
  app.append(characterCard());
}
