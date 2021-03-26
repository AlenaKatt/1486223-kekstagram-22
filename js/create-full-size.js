import {createObject} from './create-object.js';

const bigPictureContainer = document.querySelector('.big-picture');
const pictureCommentCount = bigPictureContainer.querySelector('.social__comment-count');
const pictureCommentsLoader = bigPictureContainer.querySelector('.comments-loader');
const bodyModalOpen = document.querySelector('body');

//bigPictureContainer.classList.remove('hidden');
pictureCommentCount.classList.add('hidden');
pictureCommentsLoader.classList.add('hidden');
bodyModalOpen.classList.add('.modal-open');

const createFullSise = createObject();

bigPictureContainer.querySelector('.big-picture__img').src = url;
bigPictureContainer.querySelector('.likes-count').textContent = likes;
//Количество комментариев comments подставьте как текстовое содержание элемента
bigPictureContainer.querySelector('.comments-count').textContent = comments;
//Список комментариев под фотографией: комментарии должны вставляться в блок .social__comments
bigPictureContainer.querySelector('.social__comments').textContent = comments;
bigPictureContainer.querySelector('.social__caption').textContent = description;

