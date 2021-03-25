const randomInteger = function (min, max) {
  if (min >= 0 && max >= 0) {
    return parseInt((Math.random() * (max - min) + min), 10);
  }
  if (max < min || max === min) {
    return false;
  }
}

const checkLength = function (lineToCheck, maxLenth) {
  if (lineToCheck.length <= maxLenth) {
    return true;
  }
  else {
    return false;
  }
}
// Временно вызываю функцию
checkLength('строка',6);

export {randomInteger};
