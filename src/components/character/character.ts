import { Character } from '../../types';
import { createElement } from '../../utils/createElement';
import styles from './character.module.css';

export function characterCard({
  name,
  thumbnail,
  status,
  species,
  lastLocation,
  gender,
}: Character): HTMLElement {
  const card = createElement('article', {
    className: styles.card,
    childElements: [
      createElement('img', {
        className: styles.img,
        src: thumbnail,
      }),
      createElement('div', {
        className: styles.info,
        childElements: [
          createElement('section', {
            childElements: [
              createElement('h3', {
                innerText: name,
              }),
              createElement('p', {
                className: styles.info__status,
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
