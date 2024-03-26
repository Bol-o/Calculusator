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
var numbTwoArr = []
var displayForView = ''

var one = document.getElementById('one')
one.addEventListener("click", function() {
    // This function will be executed when the button is clicked
    displayForView += '1'
    // numbOne =  numbOneArr.join('');
    displayInput.value = displayForView;
});

var aDd = document.getElementById('add');
aDd.addEventListener('click', function() {
    //trying to see if can use a loop to iterate through the string displayed,
    //so if '+' is already there, can't use it unless I press numbers again first
    //if '+' is there, will use .disable on the '+' button

    theOperator = '+'
    displayForView += '+'
    displayInput.value += '+';



    for (var i = 0; i < displayForView.length; i++){
        if (displayForView[i] == '+' && displayForView[i]-1 > 0 && displayForView[i]-1 < 9
        && displayForView[i]+1 > 0 && displayForView[i]+1 < 9 ){
            aDd.disabled = true;
        }
    }
    
})

var equals = document.getElementById('equals');
equals.addEventListener("click", function(){
        displayInput.value = ''
      if (numbOne && numbTwo){  
    displayInput.value = operate(numbOne, theOperator,numbTwo)
      }

});

function allThreeHaveValues(){
    if (numbOne && theOperator && numbTwo){
        }else {
            return
        }
}