// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES
/* global $ */
var userChoice = "";
var computerChoice = "";
var winner = "";
var randomNumber = 0;


// DOCUMENT READY FUNCTION BELOW
$("#shoot").click(function(){
    userChoice = $("#input").val();
    $("#userChoice").text(userChoice);
});

$("#shoot").click(function(){
    randomNumber = ("rock","paper", "scissors");
    computerChoice = Math.random();
    
    console.log(computerChoice);
    if (computerChoice <= .33) {
        $("#computerChoice").text("rock");
    }
    
    else if (computerChoice > .33 && computerChoice < .66) {
        $("#computerChoice").text("paper");
}
    
 else if (computerChoice >= .66){
        $("#computerChoice").text("scissors");
}
console.log (userChoice)
console.log (computerChoice)    

if(
    ((userChoice === "rock")&&(ComputerChoice === "rock"))||
    ((userChoice === "paper")&&(ComputerChoice === "paper"))||
    ((userChoice === "scissors")&&(ComputerChoice === "scissors"))||){
        $("message").text("Tie");
    }
    else if ((userChoice === "rock")&&(ComputerChoice === "paper"))|| 
    ((userChoice === "paper")&&(ComputerChoice === "scissors"))||
    ((userChoice === "scissors")&&(ComputerChoice === "rock"))||){
        $("message").text("Computer Wins!");
    }
    else if ((userChoice === "rock")&&(ComputerChoice === "paper"))||
}



});
