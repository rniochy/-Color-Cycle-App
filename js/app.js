const boxColor = document.getElementById('box-color');
const inputRed = document.getElementById('red');
const inputBlue = document.getElementById('blue');
const inputGreen = document.getElementById('green');
const checkBoxRed = document.getElementById('checkbox-red');
const checkBoxBlue = document.getElementById('checkbox-blue');
const checkBoxGreen = document.getElementById('checkbox-green');
const button = document.getElementById('button');

function setBackground(){
    boxColor.style.background = `#${inputRed.value}${inputGreen.value}${inputBlue.value}`;
} setBackground();

function disableInput(input, value){
    input.setAttribute('disabled', value);
}

function ableInput(input){
    input.removeAttribute('disabled');
}

function buttonClick () {
    if(button.innerText === 'Start'){
        button.innerText = "Stop";
        disableInput(inputBlue, true);
        disableInput(inputGreen, true);
        disableInput(inputRed, true);
    } else {
        button.innerText = "Start";
        ableInput(inputBlue);
        ableInput(inputRed);
        ableInput(inputGreen);
    }
}

button.addEventListener('click', buttonClick);
inputRed.addEventListener('change', setBackground);
inputGreen.addEventListener('change',setBackground);
inputBlue.addEventListener('change',setBackground);