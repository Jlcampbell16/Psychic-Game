//VARIABLES
var computerChoice = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

var wins = 0;
var losses = 0;
var guessLeft = 10;
var allGuesses = [];

var userGuessText = document.getElementById ("userGuessText");
var guessLeftText = document.getElementById ("guessLeftText");
var winsText = document.getElementById ("winsText");
var lossesText = document.getElementById ("lossesText");

//FUNCTIONS
var computerGuess = computerChoice[Math.floor(Math.random() *computerChoice.length)];

// function reset game 
function reset () {
    guessLeft = 10
    allGuesses = []
    computerGuess = computerChoice[Math.floor(Math.random() *computerChoice.length)];
}
// function what happens when the user presses a key
document.onkeyup = function(event) {
    var userGuess = event.key;
    allGuesses.push(userGuess);
    console.log("User Guess: " + userGuess);
    console.log("Computer Guess: " + computerGuess);
    
    if (guessLeft >0) {
        if (userGuess === computerGuess) {
            wins++;
            reset();
           
        } else {
            guessLeft--;
        }
    } else {
            losses++;
        // restart game
        reset();

    }
    
//DISPLAY
    userGuessText.textContent = allGuesses;
    guessLeftText.textContent = guessLeft;
    winsText.textContent = wins;
    lossesText.textContent = losses;
}





