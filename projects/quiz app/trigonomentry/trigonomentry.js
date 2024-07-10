const questions = [
    {
        question: "Find the value of sin(30°).",
        answers: [
            { text: "0.5", correct: true },
            { text: "1", correct: false },
            { text: "0.866", correct: false },
            { text: "0.707", correct: false }
        ]
    }, 
    {
        question: "Determine the value of cos(45°).",
        answers: [
            { text: "0.5", correct: false },
            { text: "1", correct: false },
            { text: "0.707", correct: true },
            { text: "0.866", correct: false }
        ]
    },
    {
        question: "What is the value of tan(60°)?",
        answers: [
            { text: "0.5", correct: false },
            { text: "1", correct: false },
            { text: "2", correct: false },
            { text: "√3", correct: true }
        ]
    },
    {
        question: "Calculate the value of sin(45°) + cos(45°).",
        answers: [
            { text: "√2", correct: true },
            { text: "1", correct: false },
            { text: "0.5", correct: false },
            { text: "2", correct: false }
        ]
    },
    {
        question: "Determine the value of cot(30°).",
        answers: [
            { text: "0.5", correct: false },
            { text: "√3", correct: true },
            { text: "1", correct: false },
            { text: "2", correct: false }
        ]
    },
    {
        question: "What is the value of sec(45°)?",
        answers: [
            { text: "√2", correct: true },
            { text: "0.5", correct: false },
            { text: "1", correct: false },
            { text: "2", correct: false }
        ]
    },
    {
        question: "Calculate the value of cos(30°) - sin(60°).",
        answers: [
            { text: "1", correct: false },
            { text: "0.5", correct: false },
            { text: "2", correct: false },
            { text: "√3/2", correct: true }
        ]
    },
    {
        question: "Determine the value of tan(45°) * csc(45°).",
        answers: [
            { text: "0.5", correct: false },
            { text: "1", correct: true },
            { text: "1/√2", correct: false },
            { text: "2", correct: false }
        ]
    },
    {
        question: "What is the value of sin(60°) - cos(30°)?",
        answers: [
            { text: "1", correct: false },
            { text: "0.5", correct: false },
            { text: "2", correct: false },
            { text: "√3/2", correct: true }
        ]
    },
    {
        question: "Calculate the value of cot(60°) + csc(60°).",
        answers: [
            { text: "√3/3 + 2√3", correct: true },
            { text: "1", correct: false },
            { text: "0.5", correct: false },
            { text: "2", correct: false }
        ]
    },
    {
        question: "Determine the value of sec(30°) * sin(60°).",
        answers: [
            { text: "1", correct: false },
            { text: "0.5", correct: false },
            { text: "2", correct: true },
            { text: "√3", correct: false }
        ]
    },
    {
        question: "What is the value of cos(60°) / tan(30°)?",
        answers: [
            { text: "1", correct: false },
            { text: "0.5", correct: false },
            { text: "2", correct: false },
            { text: "√3", correct: true }
        ]
    },
    {
        question: "Calculate the value of sin(45°) * cos(45°) - tan(45°).",
        answers: [
            { text: "1", correct: false },
            { text: "0", correct: true },
            { text: "0.5", correct: false },
            { text: "2", correct: false }
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo +  ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML  = answer.text;
        button.classList.add("btn");
        answerButton.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState() {
    nextButton.style.display = "none";
    while (answerButton.firstChild) {
        answerButton.removeChild(answerButton.firstChild);
    }
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    } else {
        selectedBtn.classList.add("incorrect");
    } 
    Array.from(answerButton.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore() {
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}`;

    var tryAgainButton = document.createElement("button");
    tryAgainButton.innerHTML = "Try Again";
    tryAgainButton.onclick = function() {
        startQuiz(); 
    };
    tryAgainButton.classList.add("btn");
    answerButton.appendChild(tryAgainButton);

    var backHomeButton = document.createElement("button");
    backHomeButton.innerHTML = "Back to Home";
    };

    function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
    showQuestion();
    } else {
    showScore();
    }
    }
    
    nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {
    handleNextButton();
    } else {
    startQuiz();
    }
    });
    
    startQuiz();
