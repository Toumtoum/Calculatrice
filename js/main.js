//----------------------------VARIABLES-----------------------------------------
var display = document.getElementById('result');
var pressKey = document.getElementsByClassName ('button');

var keyValue;
var result;










//----------------------------FONCTIONS-----------------------------------------

function displayOperation(){

for(var i= 0; i < pressKey.length;i++){
  pressKey[i].onclick = function (){
    keyValue = this.value ;
    display.value += keyValue;
  };
}
}

function displayResult () {

  result = eval(display.value);
  display.value = parseFloat(result);
  console.log(result);

}

function erasing () {

 display.value = display.value.substring(0,display.value.length - 1);

}

function init() {

  display.value = "";

}



//------------------------------SCRIPT------------------------------------------

window.onload = init;
displayOperation();
