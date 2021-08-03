import './style.css';

const app = document.querySelector<HTMLDivElement>('#app');

const mainElement = document.createElement('main');

const headlineElement = document.createElement('h1');
headlineElement.innerText = 'Rick and Morty Fanapp';

const searchField = document.createElement('input');
searchField.setAttribute('placeholder', 'Search your Charakter');

mainElement.append(headlineElement, searchField);

if (app !== null) {
  app.append(mainElement);
}
