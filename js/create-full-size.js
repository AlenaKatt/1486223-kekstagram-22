import {createObject} from './create-object.js';

const bigPicture = document.querySelector('.big-picture');
//const createFullSise = createObject();

bigPicture.classList.remove('hidden');

bigPicture.querySelector('.big-picture__img').src = url;
bigPicture.querySelector('.likes-count').textContent = likes;
//Количество комментариев comments подставьте как текстовое содержание элемента
bigPicture.querySelector('.comments-count').textContent = comments;
//Список комментариев под фотографией: комментарии должны вставляться в блок .social__comments
bigPicture.querySelector('.social__comments').textContent = comments;
bigPicture.querySelector('.social__caption').textContent = description;

