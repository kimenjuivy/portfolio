let questions = {
  addition: [],
  subtraction: [],
  multiplication: [],
  division: [],
  mixed: []
};

let userAnswers = {
  addition: [],
  subtraction: [],
  multiplication: [],
  division: [],
  mixed: []
};

let report = [];
let scores = {};

const emojis = {
  addition: '➕',
  subtraction: '➖',
  multiplication: '✖️',
  division: '➗',
  mixed: '🔢'
};

document.addEventListener('DOMContentLoaded', function () {
  const page = window.location.pathname.split('/').pop();
  let quizType;

  if (page.includes('addition')) {
    quizType = 'addition';
  } else if (page.includes('subtraction')) {
    quizType = 'subtraction';
  } else if (page.includes('multiplication')) {
    quizType = 'multiplication';
  } else if (page.includes('division')) {
    quizType = 'division';
  } else if (page.includes('mixed')) {
    quizType = 'mixed';
  }

  if (quizType) {
    if (quizType === 'mixed') {
      generateMixedQuiz();
    } else {
      generateQuestions(quizType, 5);
    }
    displayQuestions(quizType);

    if (document.getElementById('submit')) {
      document.getElementById('submit').addEventListener('click', checkAnswers);
    }
    if (document.getElementById('download-report')) {
      document.getElementById('download-report').addEventListener('click', downloadReport);
    }
  }

  if (document.getElementById('go-back')) {
    document.getElementById('go-back').addEventListener('click', function () {
      window.location.href = 'basic maths\ìndex.html';
    });
  }
});

function generateQuestions(type, count) {
  if (questions[type].length === 0) {
    let generatedQuestions = new Set();

    while (generatedQuestions.size < count) {
      let num1, num2, question, answer;
      switch (type) {
        case 'addition':
          num1 = Math.floor(Math.random() * 10) + 1;
          num2 = Math.floor(Math.random() * 10) + 1;
          question = `${num1} + ${num2}`;
          answer = num1 + num2;
          break;
        case 'subtraction':
          num1 = Math.floor(Math.random() * 10) + 1;
          num2 = Math.floor(Math.random() * num1) + 1;
          question = `${num1} - ${num2}`;
          answer = num1 - num2;
          break;
        case 'multiplication':
          num1 = Math.floor(Math.random() * 10) + 1;
          num2 = Math.floor(Math.random() * 10) + 1;
          question = `${num1} × ${num2}`;
          answer = num1 * num2;
          break;
        case 'division':
          num2 = Math.floor(Math.random() * 9) + 2;
          answer = Math.floor(Math.random() * 10) + 1;
          num1 = num2 * answer;
          question = `${num1} ÷ ${num2}`;
          break;
      }

      if (!generatedQuestions.has(question)) {
        questions[type].push({ question, answer, type });
        userAnswers[type].push(null);
        generatedQuestions.add(question);
      }
    }
  }
}

const MIXED_QUIZ_COUNT = 20; 

function generateMixedQuiz() {
  questions['mixed'] = [];
  userAnswers['mixed'] = [];
  let generatedQuestions = new Set();

  while (questions['mixed'].length < MIXED_QUIZ_COUNT) {
    let type = ['addition', 'subtraction', 'multiplication', 'division'][Math.floor(Math.random() * 4)];
    let num1, num2, question, answer;

    switch (type) {
      case 'addition':
        num1 = Math.floor(Math.random() * 10) + 1;
        num2 = Math.floor(Math.random() * 10) + 1;
        question = `${num1} + ${num2}`;
        answer = num1 + num2;
        break;
      case 'subtraction':
        num1 = Math.floor(Math.random() * 10) + 1;
        num2 = Math.floor(Math.random() * num1) + 1;
        question = `${num1} - ${num2}`;
        answer = num1 - num2;
        break;
      case 'multiplication':
        num1 = Math.floor(Math.random() * 10) + 1;
        num2 = Math.floor(Math.random() * 10) + 1;
        question = `${num1} × ${num2}`;
        answer = num1 * num2;
        break;
      case 'division':
        num2 = Math.floor(Math.random() * 9) + 2;
        answer = Math.floor(Math.random() * 10) + 1;
        num1 = num2 * answer;
        question = `${num1} ÷ ${num2}`;
        break;
    }

    if (!generatedQuestions.has(question)) {
      questions['mixed'].push({ question, answer, type });
      userAnswers['mixed'].push(null);
      generatedQuestions.add(question);
    }
  }
}


function displayQuestions(type) {
  const questionsContainer = document.getElementById('questions-container');
  questionsContainer.innerHTML = '';

  const typeQuestions = questions[type];

  typeQuestions.forEach((q, index) => {
    const questionDiv = document.createElement('div');
    questionDiv.className = 'question';
    questionDiv.textContent = `${index + 1}. ${q.question} = `;

    const answerInput = document.createElement('input');
    answerInput.className = 'answer';
    answerInput.type = 'number';
    answerInput.dataset.type = type;
    answerInput.dataset.index = index;
    answerInput.value = userAnswers[type][index] !== null ? userAnswers[type][index] : '';

    answerInput.addEventListener('input', (event) => {
      userAnswers[type][index] = parseFloat(event.target.value);
    });

    questionDiv.appendChild(answerInput);
    questionsContainer.appendChild(questionDiv);
  });
}


document.addEventListener('DOMContentLoaded', function () {
  const page = window.location.pathname.split('/').pop();
  let quizType;

  if (page.includes('addition')) {
    quizType = 'addition';
  } else if (page.includes('subtraction')) {
    quizType = 'subtraction';
  } else if (page.includes('multiplication')) {
    quizType = 'multiplication';
  } else if (page.includes('division')) {
    quizType = 'division';
  } else if (page.includes('mixed')) {
    quizType = 'mixed';
  }

  if (quizType) {
    if (quizType === 'mixed') {
      generateMixedQuiz();
    } else {
      generateQuestions(quizType, 5);
    }
    displayQuestions(quizType);

    if (document.getElementById('submit')) {
      document.getElementById('submit').addEventListener('click', checkAnswers);
    }
    if (document.getElementById('download-report')) {
      document.getElementById('download-report').addEventListener('click', downloadReport);
    }
  }

  if (document.getElementById('go-back')) {
    document.getElementById('go-back').addEventListener('click', function () {
      window.location.href = 'basic maths\index.html';
    });
  }
});

function checkAnswers() {
  const inputs = document.querySelectorAll('.answer');
  report = [];
  scores = {
    addition: 0,
    subtraction: 0,
    multiplication: 0,
    division: 0,
    mixed: 0
  };

  inputs.forEach((input) => {
    const userAnswer = parseFloat(input.value);
    const quizType = input.dataset.type;
    const questionIndex = parseInt(input.dataset.index);
    const question = questions[quizType][questionIndex];
    const correctAnswer = question.answer;
    const questionText = question.question;
    const questionType = question.type;

    if (!isNaN(userAnswer)) {
      let isCorrect;
      if (questionType === 'division') {
        const [dividend, divisor] = questionText.split(' ÷ ').map(Number);
        isCorrect = Math.abs(userAnswer * divisor - dividend) < 0.001;
      } else {
        isCorrect = Math.abs(userAnswer - correctAnswer) < 0.001;
      }

      if (isCorrect) {
        report.push(`Correct! ${questionText} = ${correctAnswer}`);
        scores[questionType]++;
        if (quizType === 'mixed') scores['mixed']++;
      } else {
        report.push(`Oops! ${questionText} = ${correctAnswer}. You answered: ${userAnswer}`);
      }
    } else {
      report.push(`No answer for: ${questionText} = ${correctAnswer}`);
    }
  });

  displayReport();
}

// Add this new function to display the report
function displayReport() {
  let reportContainer = document.getElementById('report-container');
  reportContainer.style.display = 'block';
  let reportList = document.getElementById('report-list');
  reportList.innerHTML = '';

  const quizType = window.location.pathname.split('/').pop().replace('.html', '');
  
  if (quizType === 'mixed') {
    let summaryItem = document.createElement('li');
    summaryItem.innerHTML = `<strong>Mixed:</strong> ${scores['mixed']}/${MIXED_QUIZ_COUNT} ${getStars(scores['mixed'])}`;
    reportList.appendChild(summaryItem);
  } else {
    let summaryItem = document.createElement('li');
    summaryItem.innerHTML = `<strong>${quizType.charAt(0).toUpperCase() + quizType.slice(1)}:</strong> ${scores[quizType]}/5 ${getStars(scores[quizType])}`;
    reportList.appendChild(summaryItem);
  }

  let separatorItem = document.createElement('li');
  separatorItem.innerHTML = '<hr>';
  reportList.appendChild(separatorItem);

  report.forEach((item) => {
    let listItem = document.createElement('li');
    listItem.innerHTML = item;
    reportList.appendChild(listItem);
  });
}
function displayQuestions(type) {
  const questionsContainer = document.getElementById('questions-container');
  questionsContainer.innerHTML = '';

  const typeQuestions = questions[type];

  const groupDiv = document.createElement('div');
  groupDiv.className = 'question-group';

  const groupTitle = document.createElement('h2');
  groupTitle.innerHTML = `${emojis[type]} ${type.charAt(0).toUpperCase() + type.slice(1)}`;
  groupDiv.appendChild(groupTitle);

  typeQuestions.forEach((q, index) => {
    const questionDiv = document.createElement('div');
    questionDiv.className = 'question';
    questionDiv.textContent = `${index + 1}. ${q.question} = `;

    const answerInput = document.createElement('input');
    answerInput.className = 'answer';
    answerInput.type = 'number';
    answerInput.dataset.type = type;
    answerInput.dataset.index = index;
    answerInput.value = userAnswers[type][index] !== null ? userAnswers[type][index] : '';

    answerInput.addEventListener('input', (event) => {
      userAnswers[type][index] = parseFloat(event.target.value);
    });

    questionDiv.appendChild(answerInput);
    groupDiv.appendChild(questionDiv);
  });

  questionsContainer.appendChild(groupDiv);
}

function checkAnswers() {
  const inputs = document.querySelectorAll('.answer');
  report = [];
  scores = {
    addition: 0,
    subtraction: 0,
    multiplication: 0,
    division: 0,
    mixed: 0
  };

  inputs.forEach((input) => {
    const userAnswer = parseFloat(input.value);
    const question = questions[input.dataset.type][parseInt(input.dataset.index)];
    const correctAnswer = question.answer;
    const questionText = question.question;
    const questionType = question.type;

    if (!isNaN(userAnswer)) {
      let isCorrect;
      if (questionType === 'division') {
        const [dividend, divisor] = questionText.split(' ÷ ').map(Number);
        isCorrect = Math.abs(userAnswer * divisor - dividend) < 0.001;
      } else {
        isCorrect = Math.abs(userAnswer - correctAnswer) < 0.001;
      }

      if (isCorrect) {
        report.push(`Correct! ${questionText} = ${correctAnswer}`);
        scores[questionType]++;
      } else {
        report.push(`Oops! ${questionText} = ${correctAnswer}. You answered: ${userAnswer}`);
      }
    } else {
      report.push(`No answer for: ${questionText} = ${correctAnswer}`);
    }
  });

  let reportContainer = document.getElementById('report-container');
  reportContainer.style.display = 'block';
  let reportList = document.getElementById('report-list');
  reportList.innerHTML = '';

  Object.keys(scores).forEach(type => {
    let summaryItem = document.createElement('li');
    summaryItem.innerHTML = `<strong>${type.charAt(0).toUpperCase() + type.slice(1)}:</strong> ${scores[type]}/${questions[type].length} ${getStars(scores[type])}`;
    reportList.appendChild(summaryItem);
  });

  let separatorItem = document.createElement('li');
  separatorItem.innerHTML = '<hr>';
  reportList.appendChild(separatorItem);

  report.forEach((item, index) => {
    let listItem = document.createElement('li');
    listItem.innerHTML = item;
    reportList.appendChild(listItem);
  });
}

function getStars(score) {
  return '\u{2B50}'.repeat(score) + '\u{2606}'.repeat(5 - score);
}

function downloadReport() {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();

  doc.setFontSize(20);
  doc.setTextColor(0, 0, 0);
  doc.text("Math Quiz Report", 105, 15, null, null, "center");

  const operations = ['addition', 'subtraction', 'multiplication', 'division', 'mixed'];
  let totalCorrect = 0;

  operations.forEach((operation, index) => {
    const type = operation.toLowerCase();
    const typeQuestions = questions[type];

    if (typeQuestions.length > 0) {
      const tableData = typeQuestions.map((q, qIndex) => {
        const userAnswer = userAnswers[type][qIndex] !== null ? userAnswers[type][qIndex].toString() : "No answer";
        const isCorrect = Math.abs(parseFloat(userAnswer) - q.answer) < 0.001;

        if (isCorrect) totalCorrect++;

        return [
          q.question,
          userAnswer,
          isCorrect ? "" : q.answer.toString()
        ];
      });

      if (index > 0) {
        doc.addPage();
      }
      doc.setFontSize(16);
      doc.text(`${operation.charAt(0).toUpperCase() + operation.slice(1)}`, 20, 30);

      doc.autoTable({
        startY: 35,
        head: [['Question', 'Your Answer', 'Correct Answer']],
        body: tableData,
      });

      let score = typeQuestions.filter((q, qIndex) => {
        const userAnswer = userAnswers[type][qIndex];
        return Math.abs(parseFloat(userAnswer) - q.answer) < 0.001;
      }).length;

      doc.setFontSize(12);
      doc.text(`Score: ${score}/${typeQuestions.length}`, 20, doc.autoTable.previous.finalY + 10);
    }
  });

  const overallPercentage = (totalCorrect / Object.values(userAnswers).reduce((sum, arr) => sum + arr.length, 0)) * 100;
  doc.setFontSize(16);
  doc.text(`Overall Score: ${overallPercentage.toFixed(2)}%`, 105, doc.autoTable.previous.finalY + 20, null, null, "center");

  doc.save('math_quiz_report.pdf');
}
