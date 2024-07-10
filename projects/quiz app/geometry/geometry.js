const questions = [
{
  question: "If two circles are tangent to each other and to a line at a common point, prove that the line is perpendicular to the line joining the centers of the circles.",
  answers: [
    { text: "Use the properties of congruent triangles.", correct: false },
    { text: "Use the properties of similar triangles.", correct: false },
    { text: "Use the Pythagorean theorem.", correct: false },
    { text: "Use the properties of tangents and perpendicular lines.", correct: true }
  ]
},

{
  question: "In a parallelogram ABCD, if ∠A = (2x - 10)° and ∠B = (3x + 20)°, find the value of x.",
  answers: [
    { text: "45", correct: false },
    { text: "60", correct: false },
    { text: "90", correct: false },
    { text: "30", correct: true }
  ]
},

{
  question: "If the diagonals of a quadrilateral bisect each other at right angles, prove that the quadrilateral is a rhombus.",
  answers: [
    { text: "Use the Pythagorean theorem.", correct: false },
    { text: "Use the properties of similar triangles.", correct: false },
    { text: "Use the properties of congruent triangles.", correct: false },
    { text: "Use the properties of diagonals and angles in a rhombus.", correct: true }
  ]
},

{
  question: "If the lengths of the diagonals of a rhombus are 12 cm and 16 cm, find the length of each side of the rhombus.",
  answers: [
    { text: "14 cm", correct: false },
    { text: "8 cm", correct: false },
    { text: "12 cm", correct: false },
    { text: "10 cm", correct: true }
  ]
},

{
  question: "If the area of an equilateral triangle is 16√3 cm², find the length of each side of the triangle.",
  answers: [
    { text: "12 cm", correct: false },
    { text: "16 cm", correct: false },
    { text: "4 cm", correct: false },
    { text: "8 cm", correct: true }
  ]
},

{
  question: "If two chords of a circle intersect at a point inside the circle, prove that the product of the lengths of one pair of opposite segments is equal to the product of the lengths of the other pair of opposite segments.",
  answers: [
    { text: "Use the Pythagorean theorem.", correct: false },
    { text: "Use the properties of similar triangles.", correct: false },
    { text: "Use the properties of congruent triangles.", correct: false },
    { text: "Use the properties of chords and segments in a circle.", correct: true }
  ]
},

{
  question: "In a cyclic quadrilateral ABCD, if ∠A = 70°, ∠B = 50°, and ∠C = 80°, find the value of ∠D.",
  answers: [
    { text: "180°", correct: false },
    { text: "200°", correct: false },
    { text: "120°", correct: false },
    { text: "160°", correct: true }
  ]
},

{
  question: "If the lengths of the diagonals of a kite are 12 cm and 20 cm, and the length of one of the equal sides is 10 cm, find the length of the other equal side.",
  answers: [
    { text: "18 cm", correct: false },
    { text: "12 cm", correct: false },
    { text: "20 cm", correct: false },
    { text: "15 cm", correct: true }
  ]
},

{
  question: "In a right-angled triangle ABC, where ∠B = 90°, if the length of the hypotenuse is 10 cm and the length of the side opposite to ∠A is 6 cm, find the length of the side opposite to ∠B.",
  answers: [
    { text: "6 cm", correct: false },
    { text: "10 cm", correct: false },
    { text: "12 cm", correct: false },
    { text: "8 cm", correct: true }
  ]
},

{
  question: "If the lengths of the sides of a triangle are in the ratio 3:4:5, and the perimeter of the triangle is 48 cm, find the length of the longest side.",
  answers: [
    { text: "15 cm", correct: false },
    { text: "18 cm", correct: false },
    { text: "12 cm", correct: false },
    { text: "20 cm", correct: true }
  ]
},

{
  question: "In a triangle ABC, if ∠A = 60°, ∠B = 30°, and the length of the side BC is 10 cm, find the length of the side AC.",
  answers: [
    { text: "20 cm", correct: false },
    { text: "15 cm", correct: false },
    { text: "5√3 cm", correct: false },
    { text: "10√3 cm", correct: true }
  ]
},

{
  question: "If the circumradius of a triangle is 12 cm and the inradius is 4 cm, find the area of the triangle.",
  answers: [
    { text: "192 cm²", correct: false },
    { text: "96 cm²", correct: false },
    { text: "288 cm²", correct: false },
    { text: "144 cm²", correct: true }
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
