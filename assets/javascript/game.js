// Create a list of word for the game
let gotArr = ["Targaryen", "Stark", "Lannister", "Greyjoy", "Arryn", "Baratheon", "Tully", "Tyrell", "Martell", "Frey", "Bolton"]

// Create counting variables
let wins = 0;
let guessLeft = 12;

//Create variables that hold references to the places in the HTML where we want to display things.
let winContent = document.getElementById("winScore");
let guessLeftContent = document.getElementById("guessesLeft");
let dashContent = document.getElementById("dash");
let guessContent = document.getElementById("guessedLetter");

// FUNCTIONS
// ==============================================================================
// Give dash lines according to the random word selected
function dashCreator(gameWord){
    for (let i = 0; i < gameWord.length; i++)
    {
        dashContent.textContent += "_ ";
    }
}
// 

// MAIN PROCESS
// ==============================================================================
// This function is run whenever the user presses a key.
document.onkeyup = function (event) {

    // Determines which key was pressed.
    let userGuess = event.key;

    // Computer generate and assigned random word for the game
    let computerChoice  = gotArr[Math.floor(Math.random() * gotArr.length)];
    
    // Fill in dashes according to game word length & place it in its element
    dashCreator(computerChoice);

    let inputLetterIndice = [];
    for (let i = 0; i < computerChoice.length; i++)
    {
        if (computerChoice.includes(userGuess)){
            inputLetterIndice.push(i);
        }
        else{
            guessContent.textContent = guessContent.textContent + userGuess + ", ";
            guessLeft--;
        }
    }



}
