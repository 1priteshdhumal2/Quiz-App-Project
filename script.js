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
];

let currentQuestionIndex = 0;
let score = 0;

const questionTextElement = document.getElementById("question-text");
const questionCodeElement = document.getElementById("question-code");
const answerButtons = document.getElementById("answer-btn");
const resultsContainer = document.getElementById("result-container");

function Startquiz() {
  let currentQuestionIndex = 0;
  let score = 0;
  resultsContainer.style.display = "none";
  showQuestion();
}

function showQuestion() {
  const currentQuestion = questions[currentQuestionIndex];
  questionTextElement.innerText = currentQuestion.questionText;
  questionCodeElement.innerText = currentQuestion.questionCode;
}
Startquiz();
