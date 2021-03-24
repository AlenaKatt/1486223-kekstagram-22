function randomInteger (min, max) {
  if (min >= 0 && max >= 0) {
    return parseInt((Math.random() * (max - min) + min), 10);
  }
  if (max < min || max === min) {
    return false;
  }
}

function checkLength (lineToCheck, maxLenth) {
  if (lineToCheck.length <= maxLenth) {
    return true;
  }
  else {
    return false;
  }
}
// Временно вызываю функцию
randomInteger(1,5);
checkLength('строка',6);

