// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES
/* global $ */
 $("#shoot").click(function(){
 $("#userChoice").text($("#input").val());

// look at User choice on screen
var sign = Math.random();
// leave alone


if(sign > .6){
 $("#computerChoice").text("Rock");
}else if(sign > .3){
 $("#computerChoice").text("Paper");
}else if(sign > 0){
 $("#computerChoice").text("Scissor");

if($(#userChoice)=== "Scissor" && #computerChoice === "Paper"){
    alert("USER WINNER!!!");
}


}});


// DOCUMENT READY FUNCTION BELOW

