import { Character } from '../../types';
import { createElement } from '../../utils/createElement';
import './character.css';

export function characterCard({
  name,
  thumbnail,
  status,
  species,
  lastLocation,
  gender,
}: Character): HTMLElement {
  const card = createElement('article', {
    className: 'card',
    childElements: [
      createElement('img', {
        className: 'card__img',
        src: thumbnail,
      }),
      createElement('div', {
        className: 'card__info',
        childElements: [
          createElement('section', {
            childElements: [
              createElement('h3', {
                innerText: name,
              }),
              createElement('p', {
                className: 'card__info__status',
                innerText: `${
                  status === 'Alive' ? '🟢 ' : '🔴 '
                } ${status} - ${species}`,
              }),
            ],
          }),
          createElement('section', {
            childElements: [
              createElement('h4', {
                innerText: 'Last known location:',
              }),
              createElement('p', {
                innerText: lastLocation,
              }),
            ],
          }),
          createElement('section', {
            childElements: [
              createElement('h4', {
                innerText: 'Gender:',
              }),
              createElement('p', {
                innerText: gender,
              }),
            ],
          }),
        ],
      }),
    ],
  });
  return card;
}
