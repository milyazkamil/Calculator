let numberOne = document.querySelector("#number1").value;
let numberTwo = document.querySelector("#number2").value;
let numberThree = document.querySelector("#number3").value;
let numberFour = document.querySelector("#number4").value;
let numberFive= document.querySelector("#number5").value;
let numberSix = document.querySelector("#number6").value;
let numberSeven = document.querySelector("#number7").value;
let numberNine = document.querySelector("#number8").value;
let numberZero = document.querySelector("#number9").value;

let inputProcess = document.querySelector("#process");
let inputResult = document.querySelector("#result");

const buttonDelete = document.querySelector("#delete");
const buttonDivide = document.querySelector("#divide");
const buttonMultiply = document.querySelector("#multiply");
const buttonPlus = document.querySelector("#plus");
const buttonMinus = document.querySelector("#minus");

document.querySelector("#plus").addEventListener("click", function(event){
     
    document.querySelector("#process").innerHTML = "2";
});

