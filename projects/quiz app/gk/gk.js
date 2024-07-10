const questions = [
    {
        question: "What is the only mammal capable of sustained flight?",
        answers: [
        { text:"flying squirel", correct: false},
        { text:"bat", correct: true},
        { text:"pteropus", correct: false},
        { text:"hummingbird", correct: false}
        ]
    }, 
    {
        question: "Who was the first person to orbit the earth?",
        answers: [
        { text:"Neil armstrong", correct: false},
        { text:"Alan Shepherd", correct: false},
        { text:"John Glenn", correct: false},
        { text:"Yuri Gagarin", correct: true}
        ]   
    },
    {
        question: "In greek mythology, who was the goddess for wisdom?",
        answers: [
        { text:"Aphrodite", correct: false},
        { text:"Athena", correct: true},
        { text:"Artemis", correct: false},
        { text:"Hera", correct: false}
        ]   
    },
    {
        question: "Which country is both an island and a continent?",
        answers: [
            { text: "New Zealand", correct: false },
            { text: "Madagascar", correct: false },
            { text: "Australia", correct: true },
            { text: "Greenland", correct: false }
        ]
    },
    {
        question: "What is the only bird that can fly backward?",
        answers: [
            { text: "Ostrich", correct: false },
            { text: "Penguin", correct: false },
            { text: "Hummingbird", correct: true },
            { text: "Eagle", correct: false }
        ]
    },
    {
        question: "Which planet has the longest day?",
        answers: [
            { text: "Mercury", correct: false },
            { text: "Mars", correct: false },
            { text: "Venus", correct: true },
            { text: "Jupiter", correct: false }
        ]
    },
    {
        question: "Who was the first woman to win a Nobel Prize?",
        answers: [
            { text: "Marie Curie", correct: true },
            { text: "Mother Teresa", correct: false },
            { text: "Rosa Parks", correct: false },
            { text: "Amelia Earhart", correct: false }
        ]
    },
    {
        question: "What is the rarest blood type?",
        answers: [
            { text: "O-Negative", correct: false },
            { text: "A-Positive", correct: false },
            { text: "AB-Negative", correct: true },
            { text: "B-Positive", correct: false }
        ]
    },
    {
        question: "What is the smallest country in the world?",
        answers: [
            { text: "Vatican City", correct: true },
            { text: "Monaco", correct: false },
            { text: "San Marino", correct: false },
            { text: "Nauru", correct: false }
        ]
    },
  
    {
        question: "What is the rarest naturally occurring element on Earth?",
        answers: [
            { text: "Francium", correct: false },
            { text: "Radium", correct: false },
            { text: "Astatine", correct: true },
            { text: "Promethium", correct: false }
        ]
    },
    {
        question: "Which Shakespeare play features the character Shylock?",
        answers: [
            { text: "The Merchant of Venice", correct: true },
            { text: "Romeo and Juliet", correct: false },
            { text: "Hamlet", correct: false },
            { text: "Macbeth", correct: false }
        ]
    },
    {
        question: "What is the densest naturally occurring element?",
        answers: [
            { text: "Plutonium", correct: false },
            { text: "Gold", correct: false },
            { text: "Osmium", correct: true },
            { text: "Uranium", correct: false }
        ]
    },
    {
        question: "What is the longest river in the world?",
        answers: [
            { text: "Nile", correct: false },
            { text: "Yangtze", correct: false },
            { text: "Amazon", correct: true },
            { text: "Mississippi", correct: false }
        ]
    },
    {
        question: "Who was the first woman to fly solo across the Atlantic Ocean?",
        answers: [
            { text: "Bessie Coleman", correct: false },
            { text: "Jacqueline Cochran", correct: false },
            { text: "Harriet Quimby", correct: false },
            { text: "Amelia Earhart", correct: true }
        ]
    },
    {
        question: "Which African country was formerly known as Abyssinia?",
        answers: [
            { text: "Eritrea", correct: false },
            { text: "Somalia", correct: false },
            { text: "Ethiopia", correct: true },
            { text: "Kenya", correct: false }
        ]
    },
    {
        question: "What is the chemical symbol for the element lead?",
        answers: [
            { text: "Pb", correct: true },
            { text: "Ld", correct: false },
            { text: "Le", correct: false },
            { text: "Pd", correct: false }
        ]
    },
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



 