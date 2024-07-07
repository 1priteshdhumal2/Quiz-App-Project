const questions = [
  {
    questionText: "What is the Output?",
    questionCode:
      "function sayHi() { console.log(name); console.log(age); var name = 'Lydia'; let age = 21; } sayHi();",
    answers: {
      A: "Lydia and Undefined",
      B: "Lydia and Reference Error",
      C: "ReferenceError and 21",
      D: "undefined and ReferenceError",
    },
    correctAnswer: "D",
  },
  {
    questionText: "What is the Output?",
    questionCode:
      "for (var i = 0; i < 3; i++) {setTimeout(() => console.log(i), 1);}for (let i = 0; i < 3; i++) {setTimeout(() => console.log(i), 1);} ",
    answers: {
      A: "0 1 2 and 0 1 2",
      B: "0 1 2 and 3 3 3",
      C: "3 3 3 and 3 3 3",
      D: "None of the above",
    },
    correctAnswer: "C",
  },
];

let currentQuestionIndex = 0;
let score = 0;

const questionTextElement = document.getElementById("question-text");
const questionCodeElement = document.getElementById("question-code");
const answerButtons = document.querySelectorAll(".answer-btn");
const resultsContainer = document.getElementById("result-container");
const resultElement = document.getElementById("result");
const restartBtn = document.getElementById("restart-btn");

function startQuiz() {
  let currentQuestionIndex = 0;
  let score = 0;
  resultsContainer.style.display = "none";
  showQuestion();
}

function showQuestion() {
  const currentQuestion = questions[currentQuestionIndex];
  questionTextElement.innerText = currentQuestion.questionText;
  questionCodeElement.innerText = currentQuestion.questionCode;

  answerButtons.forEach(button => {
    const answer = button.getAttribute('data-answer');
    button.innerText = `${answer} | ${currentQuestion.answers[answer]}`;
    button.addEventListener('click', () => selectAnswer(answer));
  })
}

function selectAnswer(answer) {
  const currentQuestion = questions[currentQuestionIndex];

  if (answer === currentQuestion.correctAnswer) {
    score++;
  }
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  }
  else {
    showResults();
  }
}

function showResults() {
  document.getElementById('question-container').style.display = 'none';
  document.getElementById('answer-container').style.display = 'none';
  resultsContainer.style.display = 'block';
  resultElement.innerText = `You scored ${score} out of ${questions.length}`;
}

restartBtn.addEventListener("click", () => {
  document.getElementById('question-container').style.display = 'block';
  document.getElementById('answer-container').style.display = 'block';
  startQuiz();
})

startQuiz();
