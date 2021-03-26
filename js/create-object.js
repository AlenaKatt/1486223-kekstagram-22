import {randomInteger} from './util.js';
import {COMMENT_COUNT_MAX, MESSAGES_AUTHOR, NAMES_AUTHOR, COMMENT_INDEX, AVATAR_COUNT, LIKES_MIN, LIKES_MAX, OBJECTS_COUNT} from './data.js';

// Создать функцию
// Внутри нее сделать цикл
// Длину цикла определить рандомно
// Это рандомное количество раз у меня должна отработать функция по созданию комментариев
const createCommentCount = () => {
  let arrCommentCount = [];
  const randomCommentCount = randomInteger (1, COMMENT_COUNT_MAX);
  for (let i = 0; i < randomCommentCount; i ++) {
    arrCommentCount[i] = createComment();
  }
  return arrCommentCount;
}

const createComment = () => {
  const randomIdCommentIndex = randomInteger (0, COMMENT_INDEX);
  const randomAvatarIndex = randomInteger (1, AVATAR_COUNT);
  const randomNameIndex = randomInteger (0, NAMES_AUTHOR.length - 1);
  return {
    id: randomIdCommentIndex,
    avatar: 'img/avatar-' + randomAvatarIndex + '.svg',
    message: getRandomMessages(),
    name: NAMES_AUTHOR[randomNameIndex],
  }
}

// Получить рандомное число от 1 2 - количество элементов в массиве
// Получить рандомное число для комментариев - что именно
// Создать массив месаджей с количеством элементов, которое выпало Цикл
// Объединить строки из массива
// Вернуть полученную строку
const getRandomMessages = () => {
  const randomMessageCount =  randomInteger (1, 2);
  let arrComments = [];
  const randomMessageComment = randomInteger (0, MESSAGES_AUTHOR.length - 1);
  for (let i = 0; i < randomMessageCount; i ++) {
    arrComments[i] = MESSAGES_AUTHOR[randomMessageComment];
  }
  let arrString = arrComments.join(' ');
  return arrString;
}

const createObject = (currentValue, index) => {
  const randomLikesIndex = randomInteger (LIKES_MIN, LIKES_MAX);
  return {
    id: index + 1,
    url: 'photos/' + (index + 1) + '.jpg',
    description: 'котик',
    likes: randomLikesIndex,
    comments: createCommentCount(),
  }
}

const arrayObjects = () => new Array(OBJECTS_COUNT).fill(null).map((currentValue, index) => createObject(currentValue, index));

export{
  createCommentCount,
  arrayObjects
};
