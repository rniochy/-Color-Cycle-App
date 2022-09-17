const boxColor = document.getElementById('box-color');
const inputRed = document.getElementById('red');
const inputBlue = document.getElementById('blue');
const inputGreen = document.getElementById('green');

const checkBoxRed = document.getElementById('checkbox-red');
const checkBoxBlue = document.getElementById('checkbox-blue');
const checkBoxGreen = document.getElementById('checkbox-green');

const button = document.getElementById('button');


boxColor.style.background = `#${inputRed.value}${inputGreen.value}${inputBlue.value}`;

function buttonClick () {
    if(button.innerText === 'Start'){
        button.innerText = "Stop"
     
    } else {
        button.innerText = "Start"  
    }
}

button.addEventListener('click', buttonClick);
inputRed.addEventListener('change', ()=>{
    boxColor.style.background = `#${inputRed.value}${inputGreen.value}${inputBlue.value}`;
});
inputGreen.addEventListener('change', ()=>{
    boxColor.style.background = `#${inputRed.value}${inputGreen.value}${inputBlue.value}`;
});
inputBlue.addEventListener('change', ()=>{
    boxColor.style.background = `#${inputRed.value}${inputGreen.value}${inputBlue.value}`;
});