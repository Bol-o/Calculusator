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
var numbOne = 0;
var numbOneString = "";

var numbTwo = 0;
var numbTwoString = "";
var theOperator;
var resultString = ''; //created to be iterated through for button blocking

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

//eQuals function
function eQuals(){
    numbOne = 0;
    numbTwo = 0;
for (var i = 0; i < numbOneArr.length; i++){
    numbOne = numbOne * 10 + numbOneArr[i]
}
for (var i = 0; i < numbTwoArr.length; i++){
    numbTwo = numbTwo * 10 + numbTwoArr[i]
}
//alert(numbOne+' prev is numbOne, next is numbTwo '+ numbTwo)
  if (numbOne !== undefined && numbTwo !== undefined){ 
   // alert(theOperator) 
//alert(operate(numbOne, theOperator,numbTwo))
  }
  
result = operate(numbOne, theOperator,numbTwo)
displayInput.value = result
 }
 //****************************

//addition button blocking function
function addButtonControl() {                                                           
    for (var i = 0; i < resultString.length; i++){
        //alert(displayForView[i] + ' i+1: '+ displayForView[i+1])
        if (resultString[i] === '+' && resultString[i+1] === undefined){ //made a mistake here,
            // instead og [i-1] was using [i]-1
           // alert('displ is blocked')
            aDd.disabled = true;
            //return
    
           // alert(parseInt(displayForView[i+1], 10))
        }else if(resultString[i] == '+' && resultString[i+1] == '1'){
            aDd.disabled = false;
            //alert(false)
        }

    }
    }
//*****************************


//buttons JS

var displayInput = document.getElementById('displayInput');

var numbOneArr = []
var numbTwoArr = []
var displayForView = ''
var displayForView2 = ''

var one = document.getElementById('one')
one.addEventListener("click", function() {
    //addButtonControl()
    // if(dot.disabled == true && theOperator === undefined){
        
    //     displayInput.value = (numbOne * 10 + 1)/10;
    //     numbOne = (numbOne * 10 + 1)/10;
    //     return
    // }
    if (theOperator === undefined){
    numbOneString = numbOneString + '1';
    displayInput.value = numbOneString;
    numbOne = parseFloat(numbOneString);
} else if (theOperator !== undefined){
    numbTwoString = numbTwoString + '1';
    displayInput.value = numbTwoString;
    numbTwo = parseFloat(numbTwoString);
}

    // if (numbOne === undefined && theOperator === undefined){
    // // This function will be executed when the button is clicked
    //     displayForView += '1' //this is connected to display for first number
    //     resultString += '1'
    //     //alert(displayForView)
    //     numbOneArr.push(1)
    // // alert(numbOneArr + 'numbeTwoArr: ' + numbTwoArr)
    // // numbOne =  numbOneArr.join('');
    //     displayInput.value = displayForView;
    //     addButtonControl()
    // }else if (numbOne !== undefined && theOperator !== undefined){
    //     //numbOne = result
    //     resultString += '1'
    //     displayForView2 += '1'
    //     //alert(displayForView2)
    //     numbTwoArr.push(1)
    //     //alert(numbTwoArr)
    //     // alert(numbOneArr + 'numbeTwoArr: ' + numbTwoArr)
    //     // alert(displayForView)
    //     displayInput.value = displayForView2;
    //     addButtonControl()
        
        
    // }
}
);
// var two = document.getElementById('two')

var aDd = document.getElementById('add');
aDd.addEventListener('click', function() {
    //trying to see if can use a loop to iterate through the string displayed,
    //so if '+' is already there, can't use it unless I press numbers again first
    //if '+' is there, will use .disable on the '+' button
    
    //addButtonControl()
  
// for (var i = 0; i < numbTwoArr.length; i++){
//     numbTwo = numbTwo * 10 + numbTwoArr[i]
// }
    //alert('num1: '+ numbOne + ' num2: '+ numbTwo)
    //below trying to set condition so if b4 and after '+' there is a number
    //and not an operator then I can use '+'
    dot.disabled = false;
    if (numbOne !== undefined){
    theOperator = '+'
    aDd.disabled = true;
    
    //alert(resultString)
    //alert(theOperator)
    //displayForView += '+'
    //displayInput.value = displayForView;
    //aDd.disabled = true
    //addButtonControl()

    //addButtonControl() //switches on or off the 'add' button
    
}
    //addButtonControl()

    

    
})
var two = document.getElementById('two');
two.addEventListener("click", function(){
    if (theOperator === undefined){
        numbOneString = numbOneString + '2';
        displayInput.value = numbOneString;
        numbOne = parseFloat(numbOneString);
    } else if (theOperator !== undefined){
        numbTwoString = numbTwoString + '2';
        displayInput.value = numbTwoString;
        numbTwo = parseFloat(numbTwoString);

    }

})

var equals = document.getElementById('equals');
equals.addEventListener("click", function(){
          
    result = operate(numbOne, theOperator,numbTwo)
    //result = result.toFixed(5);
    displayInput.value = result.toFixed(1);
    numbOne = 0;
    numbTwo = 0;
    theOperator = undefined;
    aDd.disabled = false;


     
   
});

var dot = document.getElementById('dot');
dot.addEventListener('click', function(){
    if (theOperator == undefined){
    if (numbOne == 0){
    numbOneString = numbOneString + '0';
    
    }
    numbOneString = numbOneString + '.'; 
    displayInput.value = numbOneString;

    dot.disabled = true;
    } else if(theOperator !== undefined){
    numbTwoString = numbTwoString + '.';
    displayInput.value = numbTwoString;
    }


})
//alert('num1: '+ numbOne+' num2: ' + numbTwo)

function allThreeHaveValues(){
    if (numbOne && theOperator && numbTwo){
        }else {
            return
        }
}


