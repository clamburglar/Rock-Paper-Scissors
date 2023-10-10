/* Declare rock, paper, scissors, and their individual hierarchy */
let choices = ['rock', 'paper', 'scissors']

/* Create a function that randomly generates the computers choice */
let getComputerChoice = () => {
    let computerSelection =choices[Math.floor(Math.random() * choices.length)];
    return computerSelection;
}

/* Provide user with the 3 choices to play against computer */
let playerSelection = () => {
    let getPlayerChoice = prompt('Make your pick!', 'Type rock, paper, or scissors');
/* Make player selection case insensitive */
    if (getPlayerChoice.toLowerCase != choices){
        getPlayerChoice = prompt('Must be misspelled, try again!', 'Type rock, paper, or scissors');
    } else {return getPlayerChoice}
    }
playerSelection()  
/* Create a function that evaluates user versus computer selection */


/* Display a message that declares the winner */
