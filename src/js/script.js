function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function calculateResult() {
    const display = document.getElementById('display');
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function deleteLastCharacter() {
    const display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
}

function addDeleteButton() {
    const calculator = document.getElementById('calculator'); 
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'DEL';
    deleteButton.onclick = deleteLastCharacter;
    calculator.appendChild(deleteButton); 
}

addDeleteButton();
