// Code for functions

const display = document.getElementById("display");

//input
function appendToDisplay(input){
    display.value += input;

}

//clear = C
function clearDisplay(){
    display.value = ""
}

// Eval and error trycatch statement
function calculate(){
    try{
        display.value = eval(display.value);
    }
    catch(error){
        display.value = "Error X_X";
    }
}