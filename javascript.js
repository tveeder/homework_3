// Pick A Letter Game

var wins = 0;
var loss = 0;
var guessesLeft = 9;
var flag = 0;

var my_guess = []
var random_character = []
var chosen_random_letter = []

var x = randCharacter();

alert("hello there.  your javascript is linked");



function startGame() {

    document.getElementById("Wins").innerHTML = "Wins: " + wins;
    document.getElementById("Losses").innerHTML = "Loss: " + loss;
    document.getElementById("GuessesLeft").innerHTML = "Guesses Left: " + guessesLeft;

}

document.onkeydown = function (event) {

    startGame();
    var key_pressed = String.fromCharCode(event.keyCode);

    document.getElementById("The Key").innerHTML = "you pressed " + key_pressed;

    console.log(x);
    console.log(key_pressed);
    if (key_pressed === x) {

        // alert("Nice one.  You got it.  Please play again. ");
        updateWin();
        resetGame();
        updateLetterList(key_pressed);
    }
    else {
        alert("Not a good one");
        updateLoss();
        updateLetterList(key_pressed);
    }
}

function randCharacter() {
    var chars = "ABCDEFGHIJKLMNOPQURSTUVWXYZ";
    var theLetter = chars.substr(Math.floor(Math.random() * 26), 1);
    return theLetter;
}

function updateLetterList(letter) {

    my_guess.push(letter);
    document.getElementById("your guesses").innerHTML = "List of tries: " + my_guess;
}



function updateWin() {

    wins++;
    document.getElementById("Wins").innerHTML = "Wins: " + wins;
    document.getElementById("GuessesLeft").innerHTML = "Guesses Left: " + guessesLeft;
    guessesLeft--;
    // if (wins = wins + 1) {
    //     resetGame();
    // }
}

function updateLoss() {

    loss++;
    document.getElementById("Losses").innerHTML = "Losses: " + loss;
    document.getElementById("GuessesLeft").innerHTML = "Guesses Left: " + guessesLeft;
    guessesLeft--;
    if (guessesLeft ===  - 2) {
        alert("your game is over.  pls try again.");
        resetGame();
    }
    // resetGame();
    // if (guessesLeft === -1) {


    // break;

}


function resetGame() {

    loss = 0;
    guessesLeft = 10;
    my_guess = [];
    flag = 1;
    document.getElementById("Wins").innerHTML = "Wins: " + wins;
    document.getElementById("Losses").innerHTML = "Loss: " + loss;
    document.getElementById("GuessesLeft").innerHTML = "Guesses Left: " + guessesLeft;

    console.log(wins);
    console.log(guessesLeft);

}





