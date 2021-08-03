import { createElement } from '../../utils/createElement';
import './character.css';

export function characterCard(): HTMLElement {
  const card = createElement('article', {
    className: 'card',
    childElements: [
      createElement('img', {
        className: 'card__img',
        src: 'https://rickandmortyapi.com/api/character/avatar/31.jpeg',
      }),
      createElement('div', {
        className: 'card__info',
        childElements: [
          createElement('section', {
            childElements: [
              createElement('h3', {
                innerText: 'Baby Wizard',
              }),
              createElement('p', {
                className: 'card__info__status',
                innerText: 'Dead - Human',
              }),
            ],
          }),
          createElement('section', {
            childElements: [
              createElement('h4', {
                innerText: 'Last known location:',
              }),
              createElement('p', {
                innerText: 'Earth (Replacement Dimension)',
              }),
            ],
          }),
          createElement('section', {
            childElements: [
              createElement('h4', {
                innerText: 'First seen in:',
              }),
              createElement('p', {
                innerText: 'Total Rickall',
              }),
            ],
          }),
        ],
      }),
    ],
  });
  return card;
}
