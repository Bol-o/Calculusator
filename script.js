//operator functions
function add(a,b){
    return a+b
}
function subtract(a,b){
    return a-b
}
function multiply(a,b){
    return a*b
}
function divide(a,b){
    return a/b
}
//***************

//calculations function
var numbOne;
var numbTwo;
var theOperator;

function operate(numbOne, theOperator, numbTwo){
    if (theOperator === '+'){
        return add(numbOne, numbTwo);
    }else if(theOperator === "-"){
        return subtract(numbOne, numbTwo);
    }else if (theOperator === '*'){
        return multiply(numbOne, numbTwo);
    }else if (theOperator==='/'){
        return divide(numbOne, numbTwo);
    }else {
        return 'Type properly bruv'
    }
}
//************************

//buttons JS

var displayInput = document.getElementById('displayInput');

var numbOneArr = []
var one = document.getElementById('one')
one.addEventListener("click", function() {
    // This function will be executed when the button is clicked
    numbOneArr.push(1)
    numbOne =  numbOneArr.join('');
    displayInput.value = numbOne;
});