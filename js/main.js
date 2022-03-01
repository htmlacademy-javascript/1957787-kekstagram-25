function randomNumber(from, to)
{
  if (from < 0 || to <= from) {
    throw new Error('Ошибка, некорректный диапазон');
  }
  return Math.floor(Math.random() * (to - from + 1) + from);
}

randomNumber(1, 5);

function maxLenStr(str, maxLen)
{
  return str.length <= maxLen;
}

maxLenStr('Hello', 140);

