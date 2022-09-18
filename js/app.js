const boxColor = document.getElementById('box-color');
let inputRed = document.getElementById('red');
let inputBlue = document.getElementById('blue');
let inputGreen = document.getElementById('green');
let inputIntervalValue = document.getElementById('intervalvalueInput');
const checkBoxRed = document.getElementById('checkbox-red');
const checkBoxBlue = document.getElementById('checkbox-blue');
const checkBoxGreen = document.getElementById('checkbox-green');
const button = document.getElementById('button');

let timer = [undefined, undefined, undefined];
const timerBlue = 1, timerGreen = 0, timerRed= 2;
const colorValues = ['0','1', '2','3','4','5','6','7', '8','9','A','B','C','D','F','G','H'];
let intervalValue = 250;


function setBackground(){
    boxColor.style.background = `#${inputRed.value}${inputGreen.value}${inputBlue.value}`;
} 
function disableInput(input, value){
    input.setAttribute('disabled', value);
}
function ableInput(input){
    input.removeAttribute('disabled');
}
 function findValueInput(input){
     return colorValues.findIndex(v=> v ===input.toUpperCase());
 }

function verifyExadecimalValue(input){
    let value0 =findValueInput(input.value[0]);
    let value1 =findValueInput(input.value[1]);
    
    if(value0 === -1 || value1 === -1){
        alert("Only Exadecimal Value is allowed.")
        return false;
    } else {
         return true;
    }
}

function incrementColor(input, index){
    let value0 =findValueInput(input.value[0]);
    let value1 =findValueInput(input.value[1]);
    
    if(value0 === 16) value0 = 0;  if(value1 === 16) value1 = 0;
   
    timer[index] =  setInterval(()=> {
          input.value = colorValues[value0] + colorValues[value1];
          setBackground();
          if(value1 === 16){
              value1 = 0;
              value0++;
          } else if(value0 ===16){
                value0 = 0;
          } else {
              value1++;
          }
       }, intervalValue);
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

inputIntervalValue.addEventListener('change', function() {
     verify? intervalValue = parseInt(inputIntervalValue.value) : ''
    
})
checkBoxBlue.addEventListener('change', function(){  
    const verify = verifyExadecimalValue(inputBlue); 
    verify ?
    this.checked?  incrementColor(inputBlue, timerBlue) : clearInterval(timer[timerBlue]) : ''
});
checkBoxGreen.addEventListener('change', function(){  
    const verify = verifyExadecimalValue(inputBlue); 
    verify ? 
    this.checked?  incrementColor(inputGreen, timerGreen) : clearInterval(timer[timerGreen]) : ''
    
});
checkBoxRed.addEventListener('change', function(){   
    const verify = verifyExadecimalValue(inputBlue); 
    verify ?
    this.checked?  incrementColor(inputRed, timerRed) : clearInterval(timer[timerRed]):''
    
})
setBackground();
