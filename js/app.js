const boxColor = document.getElementById('box-color');
let inputRed = document.getElementById('red');
let inputBlue = document.getElementById('blue');
let inputGreen = document.getElementById('green');
const checkBoxRed = document.getElementById('checkbox-red');
const checkBoxBlue = document.getElementById('checkbox-blue');
const checkBoxGreen = document.getElementById('checkbox-green');
const button = document.getElementById('button');

let timer = [undefined, undefined, undefined];
const timerBlue = 1, timerGreen = 0, timerRed= 2;
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

function incrementColor(input, index){
    let value0 = colorValues.findIndex(v=> v ===input.value[0].toUpperCase());
    let value1 = colorValues.findIndex(v=> v ===input.value[1].toUpperCase());
    
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
       }, 250);
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
checkBoxBlue.addEventListener('change', function(){   
    this.checked?  incrementColor(inputBlue, timerBlue) : clearInterval(timer[timerBlue])
});
checkBoxGreen.addEventListener('change', function(){   
    this.checked?  incrementColor(inputGreen, timerGreen) : clearInterval(timer[timerGreen])

});
checkBoxRed.addEventListener('change', function(){   
    this.checked?  incrementColor(inputRed, timerRed) : clearInterval(timer[timerRed])

})
