const getRandomChars = (selectedArr, charArr) => {
  const shuffledSelected = [...selectedArr.sort(() => Math.random() - 0.5)];
  const shuffledCharacters = [...charArr.sort(() => Math.random() - 0.5)];

  const alternatingArray = [];

  while (alternatingArray.length < 4) {
    if (shuffledSelected.length) alternatingArray.push(shuffledSelected.pop());
    if (shuffledCharacters.length)
      alternatingArray.push(shuffledCharacters.pop());
  }

  return alternatingArray.sort(() => Math.random() - 0.5);
};

export default getRandomChars;
