// Create a list of word for the game
let gotArr = ["targaryen", "stark", "lannister", "greyjoy", "arryn", "baratheon", "tully", "tyrell", "martell", "frey", "bolton"]

// Create an array of img objects
let imgArr = [
    {name: "targaryen", image: "Targaryen.png"},
    {name: "stark", image: "stark.png"}
]
// Create an array of hint objects

// Create counting variables
let wins = 0;
let guessLeft = 12;

//Create variables that hold references to the places in the HTML where we want to display things.
let winContent = document.getElementById("winScore");
let guessLeftContent = document.getElementById("guessesLeft");
let dashContent = document.getElementById("dash");
let guessContent = document.getElementById("guessedLetter");
let imgContent = document.getElementById("imgDisplay");
let hintContent = document.getElementById("hintImg");

// FUNCTIONS & DECLARATIONS
// ==============================================================================
// Computer generate and assigned random word for the game
let word  = gotArr[Math.floor(Math.random() * gotArr.length)];
console.log(word);

// Give dash lines according to the random word selected
let dashArr = [];
function dashCreator(gameWord){
    for (let i = 0; i < gameWord.length; i++)
    {
        dashArr[i] = "_";
    }
}
// An array of wrong user guess
let wrongGuessesArr = [];

// Display image according to the word 
if(word == imgArr.name)
{
    imgContent.innerHTML = '<img src="../images'+imgArr.image+'">'
    // hintContent = '<img src="../images'+>'
}

// MAIN PROCESS
// ==============================================================================
// Show dash in content
dashCreator(word);
dashContent.textContent = dashArr.join(" ");

// This function is run whenever the user presses a key.
document.onkeyup = function (event) {

    // Determines which key was pressed.
    let userGuess = event.key;

    // // Display image according to the word 
    // if(word == imgArr.name)
    // {
    //     imgContent = '<img src="../images'+imgArr.image+'">'
    //     // hintContent = '<img src="../images'+>'
    // }

    // If the computer generated word contains the letter user guessed & our dash array does not have user's guess (or else our guess left count will decrease)
    if (word.includes(userGuess) && (!dashArr.includes(userGuess))){
        // Loop through computer generated word 
        for (let i = 0; i < word.length; i++)
        {
            // check if the letter user guessed is the same with the current char of the computer generated word 
            if (userGuess === word.charAt(i))
            {
                // if so, replace "_" in dash array with user's guess
                dashArr[i] = userGuess;
            }
        }
        // Display current dash content 
        dashContent.textContent = dashArr.join(" ");
        // decrease guess left counter by 1
        guessLeft--;
        // If our dash array is filled and does not have any "_" left 
        if(!dashArr.includes("_")){
            // increment win count by 1
            wins++;
            // Display win count content
            winContent.textContent = wins;
            // reset guess left count 
            guessLeft = 12;
            // clear dash array 
            dashArr = [];
            // Generate new word for a new game
            word = gotArr[Math.floor(Math.random() * gotArr.length)];
            console.log(word);
            // Generat & Display new dashes
            dashCreator(word);
            dashContent.textContent = dashArr.join(" ");
            // clear wrong letter array & display new content
            wrongGuessesArr = [];
            guessContent.textContent = wrongGuessesArr.join();
        }
    }
    // WRONG LETTER GUESS
    // If guess left count is not 1 & user's guess is not in the wrong guess array & user's guess is not in the dash array (or else guess left count will decrese)
    else if (guessLeft != 1 && !wrongGuessesArr.includes(userGuess) && (!dashArr.includes(userGuess))){
        // Push the user's guess into wrong guess array
        wrongGuessesArr.push(userGuess);
        // Display wrong guess array in sting with , seperator
        guessContent.textContent = wrongGuessesArr.join(", ");
        // decrease guess left count by 1
        guessLeft--;
    }
    // If guess left count is less than or equal to 1 
    else if (guessLeft <= 1){
        // reset game 
        guessLeft = 12;
        wrongGuessesArr = [];
        guessContent.textContent = wrongGuessesArr.join();
        dashArr = [];
        word  = gotArr[Math.floor(Math.random() * gotArr.length)];
        console.log(word);
        dashCreator(word);
        dashContent.textContent = dashArr.join(" ");
    }

    guessLeftContent.textContent = guessLeft;
}
