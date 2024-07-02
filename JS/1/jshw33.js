// Напишіть функцію, яка приймає строку - речення і повертає Map, де ключами є слова, а значеннями - кількість їх повторень у цьому реченні.
// wordsCount(sentense) {}
// wordsCount(”something text something”) ⇒ Map ({something: 2, text: 1})

const wordsCount = (sentence) => {
  const wordsMap = new Map();

  const words = sentence.split(" ");

  words.forEach((word) => wordsMap.set(word, (wordsMap.get(word) || 0) + 1));

  return wordsMap;
};

const words = wordsCount("something text something something");
console.log(words);
