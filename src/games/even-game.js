import playGame from '../index.js';
import getRandomNumber from '../getRandomNumber.js';

const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (expression) => (expression % 2 === 0);

const getInputGame = () => {
  const expression = getRandomNumber();
  let correctAnswer;
  if (isEven(expression)) {
    correctAnswer = 'yes';
  } else {
    correctAnswer = 'no';
  }
  return [expression, correctAnswer];
};

const playEven = () => playGame(getInputGame, rules);

export default playEven;
