let currentInput = '0';
let previousInput = '';
let currentOperator = null;
let shouldResetScreen = false;

const display = document.getElementById('result');
const history = document.getElementById('history');

document.querySelector('.buttons').addEventListener('click', handleButtonClick);
document.addEventListener('keydown', handleKeyPress);

function handleButtonClick(event) {
    if (event.target.tagName !== 'BUTTON') return;
    
    const button = event.target;
    const buttonValue = button.textContent;
    
    if (button.classList.contains('number')) {
        inputNumber(buttonValue);
    } else if (button.classList.contains('decimal')) {
        inputDecimal();
    } else if (button.classList.contains('operator')) {
        handleOperator(button.dataset.action);
    }
    
    updateDisplay();
}

function handleKeyPress(event) {
    if (event.key >= '0' && event.key <= '9') inputNumber(event.key);
    if (event.key === '.') inputDecimal();
    if (event.key === '+' || event.key === '-' || event.key === '*' || event.key === '/') handleOperator(event.key);
    if (event.key === 'Enter' || event.key === '=') handleOperator('=');
    if (event.key === 'Escape') handleOperator('clear');
    if (event.key === 'Backspace') handleOperator('delete');
    updateDisplay();
}

function inputNumber(number) {
    if (currentInput === '0' || shouldResetScreen) {
        currentInput = number;
        shouldResetScreen = false;
    } else {
        currentInput += number;
    }
}

function inputDecimal() {
    if (shouldResetScreen) {
        currentInput = '0.';
        shouldResetScreen = false;
        return;
    }
    if (!currentInput.includes('.')) {
        currentInput += '.';
    }
}

function handleOperator(operator) {
    if (operator === 'clear') {
        currentInput = '0';
        previousInput = '';
        currentOperator = null;
        history.textContent = '';
    } else if (operator === 'delete') {
        if (currentInput.length > 1) {
            currentInput = currentInput.slice(0, -1);
        } else {
            currentInput = '0';
        }
    } else if (operator === '%') {
        currentInput = (parseFloat(currentInput) / 100).toString();
    } else if (operator === '=') {
        calculate();
    } else {
        if (currentOperator !== null && !shouldResetScreen) {
            calculate();
        }
        previousInput = currentInput;
        currentOperator = operator;
        shouldResetScreen = true;
        history.textContent = `${previousInput} ${currentOperator}`;
    }
}

function calculate() {
    if (currentOperator === null || shouldResetScreen) return;
    
    let result;
    const prev = parseFloat(previousInput);
    const current = parseFloat(currentInput);
    
    switch (currentOperator) {
        case '+':
            result = prev + current;
            break;
        case '-':
            result = prev - current;
            break;
        case '*':
            result = prev * current;
            break;
        case '/':
            result = prev / current;
            break;
    }
    
    currentInput = result.toString();
    history.textContent += ` ${current} = ${result}`;
    currentOperator = null;
    shouldResetScreen = true;
}

function updateDisplay() {
    display.textContent = currentInput;
}

updateDisplay();

