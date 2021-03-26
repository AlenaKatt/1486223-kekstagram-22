import {arrayObjects} from './create-object.js';

const miniatureContainer = document.querySelector('.pictures');
const miniatureTemplate = document.querySelector('#picture').content.querySelector('.picture');
const createMiniature = arrayObjects();
const createMiniatureFragment = document.createDocumentFragment();

createMiniature.forEach(({url, likes, comments}) => {
  const miniatureElement = miniatureTemplate.cloneNode(true);
  miniatureElement.querySelector('.picture__img').src = url;
  miniatureElement.querySelector('.picture__likes').textContent = likes;
  //Количество комментариев comments подставьте как текстовое содержание элемента .picture__comments.
  miniatureElement.querySelector('.picture__comments').textContent = comments;
  createMiniatureFragment.appendChild(miniatureElement);
});

miniatureContainer.appendChild(createMiniatureFragment);

//Временно проверяю контейнер
console.log(miniatureContainer);
