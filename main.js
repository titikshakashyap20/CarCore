
const questions=[
  {
    question: "What is the main function of an engine in a car?",
    answers: [
      {text: "To store fuel", correct: false},
      {text: "To generate power for movement", correct: true},
      {text: "To provide air conditioning", correct: false},
      {text: "To control the car's lights", correct: false},
    ]
  },
  {
    question: "Which part of the car helps in changing gears?",
    answers: [
      {text: "Steering wheel", correct: false},
      {text: "Clutch", correct: true},
      {text: "Accelerator", correct: false},
      {text: "Headlights", correct: false},
    ]
  },
  {
    question: "What does the battery in a car do?",
    answers: [
      {text: "Powers the engine", correct: false},
      {text: "Stores fuel", correct: false},
      {text: "Provides electricity for starting and accessories", correct: true},
      {text: "Controls the brakes", correct: false},
    ]
  },
  {
    question: "What is the purpose of the radiator in a car?",
    answers: [
      {text: "To cool the engine", correct: true},
      {text: "To heat the seats", correct: false},
      {text: "To store oil", correct: false},
      {text: "To clean the windows", correct: false},
    ]
  },
  {
    question: "Which part of the car is responsible for stopping it?",
    answers: [
      {text: "Accelerator", correct: false},
      {text: "Clutch", correct: false},
      {text: "Brakes", correct: true},
      {text: "Gearbox", correct: false},
    ]
  }
]

const questionElement = document.getElementById("question");
const ansbuttons = document.getElementById("answer-buttons");
const nextbutton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextbutton.innerHTML="Next";
  showQuestion();
}

function showQuestion(){
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = currentQuestion.question;

  currentQuestion.answers.forEach(answer => {
    const button=document.createElement("button");
    button.innerHTML=answer.text;
    button.classList.add("btn");
    ansbuttons.appendChild(button);
    if(answer.correct){
      button.dataset.correct=answer.correct;
    }
    button.addEventListener("click", selectAnswer)
  })
}

function resetState(){
  nextbutton.style.display="none";
  while(ansbuttons.firstChild){
    ansbuttons.removeChild(ansbuttons.firstChild);
  }
}

function selectAnswer(e){
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === "true";
  if(isCorrect){
    selectedBtn.classList.add("correct");
  } else {
    selectedBtn.classList.add("incorrect");
  }
  Array.from(ansbuttons.children).forEach((button) => {
    button.disabled = true; // Disable buttons after selection
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    }
  });
  nextbutton.style.display = "block"; // Display "Next" button
}

nextbutton.addEventListener("click", () => {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
});

function showScore() {
  resetState();
  questionElement.innerHTML = `Your score: ${score} / ${questions.length}`;
  nextbutton.innerHTML = "Restart";
  nextbutton.style.display = "block";
  nextbutton.addEventListener("click", startQuiz);
}

startQuiz();

/*....................................*/

document.addEventListener("DOMContentLoaded", () => {
  const signupForm = document.querySelector("form");
  const emailInput = document.getElementById("email");

  // Email validation regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  signupForm.addEventListener("submit", (event) => {
    const email = emailInput.value.trim();

    // Validate the email
    if (!emailRegex.test(email)) {
      event.preventDefault(); // Prevent the form from submitting
      alert("Invalid Email Address. Please enter a valid email.");
      return;
    }

  });
});

