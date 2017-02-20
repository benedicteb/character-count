import ColorHash from 'color-hash';

const characterOccurence = (character, text) => {
  const re = new RegExp(`[^${character}]`, 'g');

  return text.replace(re, '').length;
};

const stringToLetters = (text) => (
  text.toLowerCase().replace(/[^a-zæøå]/g, '')
);

const textToSentences = (text) => (
  text.split(/[.!?]/g).filter((s) => stringToLetters(s) !== '')
);

const textToDataSet = (text) => {
  const onlyLetters = stringToLetters(text);

  // Filter into sorted array of unique characters
  const characters = onlyLetters.split('').filter(
    (character, index, array) => (array.indexOf(character) === index)
  ).sort();

  const colorHash = new ColorHash();
  const values = [];
  const backgroundColors = [];

  characters.forEach((character) => {
    values.push(characterOccurence(character, onlyLetters));
    backgroundColors.push(colorHash.hex(character));
  });

  return {
    datasets: [
      {
        backgroundColor: backgroundColors,
        data: values,
        label: 'Characters'
      }
    ],
    labels: characters
  };
};

export {
  characterOccurence,
  stringToLetters,
  textToDataSet,
  textToSentences
};
