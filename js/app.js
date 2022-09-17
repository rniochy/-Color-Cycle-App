const boxColor = document.getElementById('box-color');
let inputRed = document.getElementById('red');
let inputBlue = document.getElementById('blue');
let inputGreen = document.getElementById('green');
const checkBoxRed = document.getElementById('checkbox-red');
const checkBoxBlue = document.getElementById('checkbox-blue');
const checkBoxGreen = document.getElementById('checkbox-green');
const button = document.getElementById('button');

const colorValues = ['0','1', '2','3','4','5','6','7', '8','9','A','B','C','D','F','G','H'];


function setBackground(){
    boxColor.style.background = `#${inputRed.value}${inputGreen.value}${inputBlue.value}`;
} 
function disableInput(input, value){
    input.setAttribute('disabled', value);
}
function ableInput(input){
    input.removeAttribute('disabled');
}
function incrementColor(input){
     let value0 = colorValues.findIndex(v=> v ===input.value[0]);
     let value1 = colorValues.findIndex(v=> v ===input.value[1]);
     console.log(input.value)
     if(value0 === 16) value0 = 0; 
     if(value1 === 16) value1 = 0;
     
     setInterval(()=> {
        console.log(input.value)
        input.value = colorValues[value0++] + colorValues[value1++];
        setBackground();

        if(value0 === 16) value0 = 0; 
        if(value1 === 16) value1 = 0;
        console.log(input.value)
     }, 1000);
}

function buttonClick () {
    
    if(button.innerText === 'Start'){
        button.innerText = "Stop";
        disableInput(inputBlue, true);
        disableInput(inputGreen, true);
        disableInput(inputRed, true);
        disableInput(checkBoxRed, true);
        disableInput(checkBoxBlue, true);
        disableInput(checkBoxGreen, true);

    } else {
        button.innerText = "Start";
        ableInput(inputBlue);
        ableInput(inputRed);
        ableInput(inputGreen);
        ableInput(checkBoxRed);
        ableInput(checkBoxBlue);
        ableInput(checkBoxGreen);
    }
}


button.addEventListener('click', buttonClick);
inputRed.addEventListener('change', setBackground);
inputGreen.addEventListener('change',setBackground);
inputBlue.addEventListener('change',setBackground);
setBackground();
checkBoxBlue.addEventListener('select', ()=>{ incrementColor(inputRed)});