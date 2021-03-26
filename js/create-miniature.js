import {arrayObjects, createCommentCount} from './create-object.js';

const miniatureContainer = document.querySelector('.pictures');
const miniatureTemplate = document.querySelector('#picture').content.querySelector('.picture');
const createMiniature = arrayObjects();
const createMiniatureFragment = document.createDocumentFragment();

createMiniature.forEach(({url, likes}) => {
  const miniatureElement = miniatureTemplate.cloneNode(true);
  miniatureElement.querySelector('.picture__img').src = url;
  miniatureElement.querySelector('.picture__likes').textContent = likes;
  //Количество комментариев comments подставьте как текстовое содержание элемента .picture__comments.
  //Узнать длину массива comments
  miniatureElement.querySelector('.picture__comments').textContent = createCommentCount().length;
  createMiniatureFragment.appendChild(miniatureElement);
});

miniatureContainer.appendChild(createMiniatureFragment);
