// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES
/* global $ */



// DOCUMENT READY FUNCTION BELOW
var userChoice ;

$("#shoot").click(function(){
    userChoice = $("#input").val();
     $("#userChoice").text(userChoice);
     
});

var computerChoice;

$("#shoot").click(function(){
    
     var randomAnswer;
     randomAnswer= Math.random();
     if (randomAnswer <.33){
        $("#computerChoice").text("rock");
         computerChoice = "rock";
     }
    else if(randomAnswer<.66){
        $("#computerChoice").text("paper");
         computerChoice = "paper";
    }
    else {
        $("#computerChoice").text("scissors");
        computerChoice ="scissors";
    }

console.log(userChoice)
console.log(computerChoice)

if (
    ((userChoice==="rock")&&(computerChoice==="rock"))||
    ((userChoice==="paper")&&(computerChoice==="paper"))||
    ((userChoice==="scissors")&&(computerChoice==="scissors"))
    ){
    $("#message").text("No one wins");
}
else if (((userChoice==="rock")&&(computerChoice==="paper"))||
    ((userChoice==="paper")&&(computerChoice==="scissors"))||
    ((userChoice==="scissors")&&(computerChoice==="rock"))
    ){
    $("#message").text("Computer Wins");
}
else if(((userChoice==="rock")&&(computerChoice==="scissors"))||
    ((userChoice==="paper")&&(computerChoice==="rock"))||
    ((userChoice==="scissors")&&(computerChoice==="paper"))
    ){
    $("#message").text("User Wins ");
}


});