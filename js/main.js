function getRandomInteger (min, max) {
  const randomInteger = min + Math.random() * (max + 1 - min);

  if (min < 0) {throw new Error('Диапазон может быть только положительный');}
  if (min >= max) {throw new Error('Укажите корректный диапазон');}

  return Math.floor(randomInteger);
}

function getRandomFloat(min, max, decimals) {
  const randomFloatDecimal = (min + Math.random() * (max + 1 - min)).toFixed(decimals);

  if (min < 0) {throw new Error('Диапазон может быть только положительный');}
  if (min >= max) {throw new Error('Укажите корректный диапазон');}

  return Number(randomFloatDecimal);
}

getRandomInteger(1, 10);
getRandomFloat(1.0123912093, 123.1389273, 3);
