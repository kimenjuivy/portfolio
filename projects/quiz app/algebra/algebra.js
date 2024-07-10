const questions = [
    {
        "question": "Solve for x: 3x + 5 = 17",
        "answers": [
            {"text": "x = 4", "correct": true},
            {"text": "x = 6", "correct": false},
            {"text": "x = 8", "correct": false},
            {"text": "x = 10", "correct": false}
        ]
    },
    {
        "question": "Factorize the expression: x^2 - 9",
        "answers": [
            {"text": "(x + 3)(x - 3)", "correct": true},
            {"text": "(x - 3)^2", "correct": false},
            {"text": "(x + 9)(x - 9)", "correct": false},
            {"text": "(x^2 + 9)", "correct": false}
        ]
    },
    {
        "question": "Simplify: (2x^2 - 5x + 3) + (3x^2 + 4x - 7)",
        "answers": [
            {"text": "5x^2 - x - 4", "correct": true},
            {"text": "5x^2 - x - 4", "correct": false},
            {"text": "5x^2 + 9x - 10", "correct": false},
            {"text": "5x^2 + 9x - 4", "correct": false}
        ]
    },
    {
        "question": "What is the solution to the equation: 2(x - 4) = 10",
        "answers": [
            {"text": "x = 5", "correct": false},
            {"text": "x = 7", "correct": true},
            {"text": "x = 9", "correct": false},
            {"text": "x = 12", "correct": false}
        ]
    },
    {
        "question": "Solve for y: 2y - 7 = 5",
        "answers": [
            {"text": "y = 1", "correct": false},
            {"text": "y = 6", "correct": true},
            {"text": "y = 9", "correct": false},
            {"text": "y = 12", "correct": false}
        ]
    },
    {
        "question": "Factorize: x^2 + 6x + 9",
        "answers": [
            {"text": "(x + 3)^2", "correct": true},
            {"text": "(x - 3)^2", "correct": false},
            {"text": "(x + 9)(x - 9)", "correct": false},
            {"text": "(x^2 + 9)", "correct": false}
        ]
    },
    {
        "question": "Expand the expression: (x - 3)(x + 4)",
        "answers": [
            {"text": "x^2 + x - 12", "correct": true},
            {"text": "x^2 - x - 12", "correct": false},
            {"text": "x^2 + x + 12", "correct": false},
            {"text": "x^2 - x + 12", "correct": false}
        ]
    },
    {
        "question": "Simplify: 2(x + 3) - 3(x - 4)",
        "answers": [
            {"text": "5x + 18", "correct": false},
            {"text": "5x - 6", "correct": true},
            {"text": "5x + 6", "correct": false},
            {"text": "5x - 18", "correct": false}
        ]
    },
    {
        "question": "Solve for x: 2x^2 - 5x = 3",
        "answers": [
            {"text": "x = -1, x = 3/2", "correct": true},
            {"text": "x = -3/2, x = 1", "correct": false},
            {"text": "x = 1, x = 3", "correct": false},
            {"text": "x = -1, x = -3/2", "correct": false}
        ]
    },
    {
        "question": "Find the value of x: |2x - 7| = 3",
        "answers": [
            {"text": "x = 5/2, x = 10/7", "correct": false},
            {"text": "x = 5/2, x = 7/2", "correct": true},
            {"text": "x = 10/7, x = 7/2", "correct": false},
            {"text": "x = 5/2, x = 21/7", "correct": false}
        ]
    },
    {
        "question": "Simplify the expression: 3(x + 2) - 2(x - 4)",
        "answers": [
            {"text": "5x + 14", "correct": false},
            {"text": "x + 14", "correct": false},
            {"text": "x + 10", "correct": false},
            {"text": "5x + 10", "correct": true}
        ]
    },
    {
        "question": "Factorize: \(x^2 - 25\)",
        "answers": [
            {"text": "(x + 5)(x - 5)", "correct": true},
            {"text": "(x - 5)^2", "correct": false},
            {"text": "(x + 25)(x - 25)", "correct": false},
            {"text": "(x^2 + 25)", "correct": false}
        ]
    },
    {
        "question": "Solve for \(x\): \(2(3x - 1) = 5x + 3\)",
        "answers": [
            {"text": "x = -5/4", "correct": false},
            {"text": "x = -1", "correct": false},
            {"text": "x = 1/4", "correct": true},
            {"text": "x = 3", "correct": false}
        ]
    },
    {
        "question": "What is the solution to the equation: \(4x^2 - 9 = 0\)",
        "answers": [
            {"text": "x = ±3/2", "correct": true},
            {"text": "x = ±2/3", "correct": false},
            {"text": "x = ±3", "correct": false},
            {"text": "x = ±9/4", "correct": false}
        ]
    },
    {
        "question": "Solve for \(y\): \(3y - 4 = 2(y + 1)\)",
        "answers": [
            {"text": "y = -2/3", "correct": false},
            {"text": "y = -2", "correct": false},
            {"text": "y = 2/3", "correct": true},
            {"text": "y = 2", "correct": false}
        ]
    },
    {
        "question": "Factorize: \(x^2 - 2x + 1\)",
        "answers": [
            {"text": "(x - 1)^2", "correct": true},
            {"text": "(x + 1)^2", "correct": false},
            {"text": "(x^2 - 1)", "correct": false},
            {"text": "(x - 2)^2", "correct": false}
        ]
    },
    {
        "question": "Expand the expression: \(2x + 3)(x - 4)\)",
        "answers": [
            {"text": "2x^2 - 5x - 12", "correct": true},
            {"text": "2x^2 - 5x + 12", "correct": false},
            {"text": "2x^2 + 5x - 12", "correct": false},
            {"text": "2x^2 + 5x + 12", "correct": false}
        ]
    },
    {
        "question": "Simplify: \(4(x + 2) + 3(2x - 1)\)",
        "answers": [
            {"text": "10x + 8", "correct": false},
            {"text": "10x + 5", "correct": false},
            {"text": "10x + 2", "correct": true},
            {"text": "10x - 8", "correct": false}
        ]
    },
    {
        "question": "Solve for \(x\): \(3x^2 + 2x - 5 = 0\)",
        "answers": [
            {"text": "x = -1, x = 5/3", "correct": false},
            {"text": "x = -5/3, x = 1", "correct": true},
            {"text": "x = 1, x = 5/3", "correct": false},
            {"text": "x = -1, x = -5/3", "correct": false}
        ]
    },
    {
        "question": "Find the value of \(x\): \(|3x - 8| = 4\)",
        "answers": [
            {"text": "x = 4, x = 8/3", "correct": true},
            {"text": "x = 4, x = -8/3", "correct": false},
            {"text": "x = -4, x = 8/3", "correct": false},
            {"text": "x = -4, x = -8/3", "correct": false}
        ]
    }
];
const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex =0;
let score = 0;

function startQuiz(){
 currentQuestionIndex = 0;
 score = 0;
 nextButton.innerHTML= "Next";
 showQuestion();
}
 function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo +  ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer=> {
     const button = document.createElement("button");
     button.innerHTML  = answer.text;
     button. classList.add("btn");
     answerButton.appendChild(button);
     if(answer.correct){
        button.dataset.correct=answer.correct;
     }
     button.addEventListener("click", selectAnswer)
    } )
 }
 function resetState(){
       nextButton.style.display="none";
       while(answerButton.firstChild){
        answerButton.removeChild(answerButton.firstChild);
       }
 }
 function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct ==="true";
    if (isCorrect) {
    selectedBtn.classList.add("correct");
    score++;
    } else {
     selectedBtn.classList.add("incorrect");
    } 
    Array.from(answerButton.children).forEach(button=>
        {
         if(button.dataset.correct === "true") {
            button.classList.add("correct")
         }
        button.disabled= true;
        });
        nextButton.style.display ="block";
 }
 function showScore(){
    resetState();
    questionElement.innerHTML =`you have a score of ${score} out of ${questions.length}!`;
    nextButton.innerHTML="Try Again";
    nextButton.style.display="block";
    
 }
 function handleNextButton(){
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
     showScore ();
    }
 }
 nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
handleNextButton();
    }else{
        startQuiz();
    }

 });
 startQuiz();



 