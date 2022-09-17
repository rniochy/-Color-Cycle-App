const boxColor = document.getElementById('box-color');
const inputRed = document.getElementById('red');
const inputBlue = document.getElementById('blue');
const inputGreen = document.getElementById('green');

const checkBoxRed = document.getElementById('checkbox-red');
const checkBoxBlue = document.getElementById('checkbox-blue');
const checkBoxGreen = document.getElementById('checkbox-green');

const button = document.getElementById('button');

function buttonClick () {
    if(button.innerText === 'Play'){
        button.innerText = "Stop"
        alert(button.innerText);
    } else {
        button.innerText = "Play"
        alert(button.innerText);
    }
}

button.addEventListener('click', buttonClick);