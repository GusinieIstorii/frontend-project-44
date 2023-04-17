const getInputGame = () => {
  const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  const expression = Math.round(Math.random() * 100);

  let correctAnswer = 'yes';

  for (let i = 2; i < expression; i += 1) {
    if (expression % i === 0) {
      correctAnswer = 'no';
      break;
    }
  }

  return [expression, correctAnswer, rules];
};

export default getInputGame;