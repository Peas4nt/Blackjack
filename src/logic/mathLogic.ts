export default class MathLogic {
  private _reward = 10;
  private _equation: string = '';
  private _correctAnswer = 0;
  
  private _answersCount = 4;
  private _answers: number[] = [];

  constructor() {
    this._equation = this.generateEquation();
    this._correctAnswer = this.calculateAnswer(this._equation);
    this._answers = this.generateAnswers(this._correctAnswer);
  }

  get reward() {
    return this._reward;
  }

  get equation() {
    return this._equation;
  }

  get correctAnswer() {
    return this._correctAnswer;
  }

  get answers() {
    return this._answers;
  }

  private generateEquation(): string {
    const num1 = Math.floor(Math.random() * 10);
    const num2 = Math.floor(Math.random() * 10);
    const operator = Math.random() > 0.5 ? '+' : '-';

    return `${num1}${operator}${num2}`;
  }

  private calculateAnswer(equation: string): number {
    const [num1, operator, num2] = equation.split(/(\D)/);
    let number1 = parseInt(num1, 10);
    const number2 = parseInt(num2, 10);

    if (operator === '+')
      return number1 + number2;
    else if (operator === '-')
      return number1 - number2;
    else if (operator === '*')
      return number1 * number2;
    else if (operator === '/') {
      number1 = number1 || 1;
      return number1 / number2;
    }

    return 0;
  }

  private generateAnswers(correctAnswer: number): number[] {
    const answers: number[] = [];
    answers.push(correctAnswer);


    for (let i = 0; i < this._answersCount; i++) {
      if (answers[i]) continue;
      let answerExists = false;

      const randomNum = Math.floor(Math.random() * 20) - 10; // Random number between -10 and 9
      const randomAnswer = correctAnswer + randomNum;

      // check if the correct answer already exists in the answers array
      answers.forEach((answer) => { if (answer === randomAnswer) answerExists = true; });

      if (answerExists) {
        i--;
        continue;
      }
      answers.push(randomAnswer);
    }

    return answers.sort(() => Math.random() - 0.5); // Shuffle the answers
  }
}

// testing

// const mathLogic = new MathLogic();
// console.log('Equation:', mathLogic.equation);
// console.log('Correct Answer:', mathLogic.correctAnswer);
// console.log('Answers:', mathLogic.answers);