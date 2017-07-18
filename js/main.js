//----------------------------VARIABLES-----------------------------------------
var display = document.getElementById('result');
var pressKey = document.getElementsByClassName ('button');

var keyValue;
var result;









//----------------------------FONCTIONS-----------------------------------------

function returnKeyValue (){

for(var i= 0; i < pressKey.length;i++){
  pressKey[i].onclick = function (){
    keyValue = this.value ;
    // console.log(keyValue);
    display.value += keyValue;
  };
}
}

// function displayOperation() {
//
//   returnKeyValue ()
//   display.value += keyValue;
//   console.log(keyValue);
// }

function displayResult () {

  result = display.value;


}



//------------------------------SCRIPT------------------------------------------


returnKeyValue ();
console.log(result);
