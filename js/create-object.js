import {randomInteger} from './util.js';
import {MESSAGES_AUTHOR, NAMES_AUTHOR, COMMENT_INDEX, AVATAR_COUNT, LIKES_MIN, LIKES_MAX, OBJECTS_COUNT} from './data.js';

const createComment = () => {
  const randomIdCommentIndex = randomInteger (0, COMMENT_INDEX);
  const randomAvatarIndex = randomInteger (1, AVATAR_COUNT);
  const randomNameIndex = randomInteger (0, NAMES_AUTHOR.length - 1);

  return {
    id: randomIdCommentIndex,
    avatar: 'img/avatar-' + randomAvatarIndex + '.svg',
    message: getRandomMessages(),
    name: NAMES_AUTHOR[randomNameIndex],
  };
};

const getRandomMessages = () => {
  // Получить рандомное число от 1 2 - количество элементов в массиве
  const randomMessageCount =  randomInteger (1, 2);
  // Получить рандомное число для комментариев - что именно
  // Создать массив месаджей с количеством элементов, которое выпало Цикл
  let arrComments = [];
  for (let i = 0; i < randomMessageCount; i ++) {
    const randomMessageComment = randomInteger (0, MESSAGES_AUTHOR.length - 1);
    arrComments[i] = MESSAGES_AUTHOR[randomMessageComment];
  }
  // Объединить строки из массива
  let arrString = arrComments.join(' ');
  // Вернуть полученную строку
  return arrString;
}

const createObject = (currentValue, index) => {
  const randomLikesIndex = randomInteger (LIKES_MIN, LIKES_MAX);

  return {
    id: index + 1,
    url: 'photos/' + (index + 1) + '.jpg',
    description: 'котик',
    likes: randomLikesIndex,
    comments: createComment(),
  }
}
const arrayObjects = () => new Array(OBJECTS_COUNT).fill(null).map((currentValue, index) => createObject(currentValue, index));

export {arrayObjects};
