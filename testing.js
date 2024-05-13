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
var numbOneString = "";

var numbTwo;
var numbTwoString = "";
var theOperator = '';



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

//ADDING NEGATIVE NUMBER AS FIRST

var isMinus; //for adding negative number as the first number

function firstNumbNegative(){
    if (numbOne < 0){
        return
    }
    if (isMinus == true){
        numbOne = numbOne * (-1);
        //alert(numbOne)
        displayInput.value = '- ' + numbOneString;
    } 
}






// RESET FUNCTION//

function reset(){
    numbOne = undefined;
    numbOneString = '';
    numbTwo = undefined;
    numbTwoString = '';
    theOperator = '';
    resultString = '';
    displayInput.value = '';
    aDd.disabled = false;
}

//*******************






//eQuals function

function equals(){
    result = operate(numbOne, theOperator,numbTwo)
    //result = result.toFixed(5);
    displayInput.value = result;
    numbOne = result;
    numbTwo = undefined;
    numbOneString = '';
    numbTwoString = '';
    theOperator = '';
    //aDd.disabled = false;
}




// function eQuals(){
//     numbOne = 0;
//     numbTwo = 0;
// for (var i = 0; i < numbOneArr.length; i++){
//     numbOne = numbOne * 10 + numbOneArr[i]
// }
// for (var i = 0; i < numbTwoArr.length; i++){
//     numbTwo = numbTwo * 10 + numbTwoArr[i]
// }
// //alert(numbOne+' prev is numbOne, next is numbTwo '+ numbTwo)
//   if (numbOne !== undefined && numbTwo !== undefined){ 
//    // alert(theOperator) 
// //alert(operate(numbOne, theOperator,numbTwo))
//   }
  
// result = operate(numbOne, theOperator,numbTwo)
// displayInput.value = result
//  }
 //****************************




//addition button blocking function
// function addButtonControl() {                                                           
//     for (var i = 0; i < resultString.length; i++){
//         //alert(displayForView[i] + ' i+1: '+ displayForView[i+1])
//         if (resultString[i] === '+' && resultString[i+1] === undefined){ //made a mistake here,
//             // instead og [i-1] was using [i]-1
//            // alert('displ is blocked')
//             aDd.disabled = true;
//             //return
    
//            // alert(parseInt(displayForView[i+1], 10))
//         }else if(resultString[i] == '+' && resultString[i+1] == '1'){
//             aDd.disabled = false;
//             //alert(false)
//         }

//     }
//     }
//*****************************








//buttons JS

var displayInput = document.getElementById('displayInput');

// var numbOneArr = []
// var numbTwoArr = []
// var displayForView = ''
// var displayForView2 = ''


var clear = document.getElementById('clear');
clear.addEventListener('click', function(){
    reset();
});


// var two = document.getElementById('two')





//OPERATOR ELEMENTS-------------

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
   // dot.disabled = false;
    if (theOperator !== '' && numbTwo !== undefined ){
        equals();
        
    }
    if (numbOne !== undefined){
    theOperator = '+'
    //aDd.disabled = true;
    
    //alert(resultString)
    //alert(theOperator)
    //displayForView += '+'
    //displayInput.value = displayForView;
    //aDd.disabled = true
    //addButtonControl()

    //addButtonControl() //switches on or off the 'add' button
    }
//    }else if (theOperator !== ''){
//     aDd.disabled = false;
//     equals();
//    }  
    //addButtonControl()
    
})

var multiplication = document.getElementById('multiply');

multiplication.addEventListener('click', function(){

    if (theOperator !== '' && numbTwo !== undefined ){
        equals();
        
    }
    if (numbOne !== undefined){
    theOperator = '*';

    }

})

var division = document.getElementById('divide');
division.addEventListener('click',function(){
    if (theOperator !== '' && numbTwo !== undefined ){
        equals();
        
    }
    if (numbOne !== undefined){
    theOperator = '/';

    }

})

var subtraction = document.getElementById('subtract');
subtraction.addEventListener('click', function(){

    if(numbOne == undefined){
        isMinus = true
    }

    if (theOperator !== '' && numbTwo !== undefined ){
        equals();
        
    }
    if (numbOne !== undefined){
    theOperator = '-';

    }

})




var equal = document.getElementById('equals');
equal.addEventListener("click", function(){
   
   
     equals()       
    // result = operate(numbOne, theOperator,numbTwo)
    // //result = result.toFixed(5);
    // displayInput.value = result;
    // numbOne = undefined;
    // numbTwo = undefined;
    // theOperator = '';
    // aDd.disabled = false;


     
   
});
//*********************************   





//DOT & NUMBERS ELEMENTS


var one = document.getElementById('one');
one.addEventListener("click", function() {
    //addButtonControl()
    // if(dot.disabled == true && theOperator === undefined){
        
    //     displayInput.value = (numbOne * 10 + 1)/10;
    //     numbOne = (numbOne * 10 + 1)/10;
    //     return
    // }
    if (theOperator === ''){
        //alert('iz working')
    numbOneString = numbOneString + '1';
    displayInput.value = numbOneString;
    numbOne = parseFloat(numbOneString);
} else if (theOperator !== ''){
    numbTwoString = numbTwoString + '1';
    displayInput.value = numbTwoString;
    numbTwo = parseFloat(numbTwoString);
}

    firstNumbNegative()

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




var two = document.getElementById('two');
two.addEventListener("click", function(){
    if (theOperator === ''){
        numbOneString = numbOneString + '2';
        displayInput.value = numbOneString;
        numbOne = parseFloat(numbOneString);
    } else if (theOperator !== ''){
        numbTwoString = numbTwoString + '2';
        displayInput.value = numbTwoString;
        numbTwo = parseFloat(numbTwoString);

    }

})

var three = document.getElementById('three');
three.addEventListener("click", function(){
    if (theOperator === ''){
        numbOneString = numbOneString + '3';
        displayInput.value = numbOneString;
        numbOne = parseFloat(numbOneString);
    } else if (theOperator !== ''){
        numbTwoString = numbTwoString + '3';
        displayInput.value = numbTwoString;
        numbTwo = parseFloat(numbTwoString);

    }

})

var four = document.getElementById('four');
four.addEventListener("click", function(){
    if (theOperator === ''){
        numbOneString = numbOneString + '4';
        displayInput.value = numbOneString;
        numbOne = parseFloat(numbOneString);
    } else if (theOperator !== ''){
        numbTwoString = numbTwoString + '4';
        displayInput.value = numbTwoString;
        numbTwo = parseFloat(numbTwoString);

    }

})

var five = document.getElementById('five');
five.addEventListener("click", function(){
    if (theOperator === ''){
        numbOneString = numbOneString + '5';
        displayInput.value = numbOneString;
        numbOne = parseFloat(numbOneString);
    } else if (theOperator !== ''){
        numbTwoString = numbTwoString + '5';
        displayInput.value = numbTwoString;
        numbTwo = parseFloat(numbTwoString);

    }

})

//****************************************





var dot = document.getElementById('dot');
dot.addEventListener('click', function(){
    if (theOperator == ''){
        for (var i=0; i < numbOneString.length; i++){
            if(numbOneString[i] == '.'){
               return
            }
        }
    if (numbOneString == ''){
        numbOneString = numbOneString + '0'
    }
        numbOneString = numbOneString + '.'
        displayInput.value = numbOneString;
    // if (numbOne == 0 || numbOne == undefined){
    // numbOneString = numbOneString + '0';
    
    // }
    // numbOneString = numbOneString + '.'; 
    // displayInput.value = numbOneString;

    // dot.disabled = true;
    } else if(theOperator !== undefined){
        for (var i=0; i < numbTwoString.length; i++){
            if(numbTwoString[i] == '.'){
               return
            }
        }
        if (numbTwoString == ''){
            numbTwoString = numbTwoString + '0';
        }
        numbTwoString = numbTwoString + '.'
        displayInput.value = numbTwoString;
    }


})
//alert('num1: '+ numbOne+' num2: ' + numbTwo)




