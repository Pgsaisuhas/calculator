var displayValue='';
function add(value){
    displayValue += value;
    document.getElementById('display').value = displayValue;
}
function clearDisplay(){
    displayValue = '';
    document.getElementById('display').value = displayValue;
}
function calculate(){
    try {
        displayValue = eval(displayValue);
        document.getElementById('display').value = displayValue;
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
}

document.addEventListener('keydown', function(event) {
    const key = event.key;

    if (key === 'Enter') {
        event.preventDefault();
    }
    if (/\d|\.|\/|\*|\-|\+/.test(key)) {
        add(key);
    } else if (key === 'Enter') {
        calculate();
    } else if (key === 'Escape') {
        clearDisplay();
    }
    if(displayValue === ''){
        displayValue = ''
    }
    if (key === 'Backspace') {
        displayValue = displayValue.slice(0, -1); // Remove last character
        document.getElementById('display').value = displayValue;
    }
});