/* Declare rock, paper, scissors, and their individual hierarchy */

let choices = ['rock', 'paper', 'scissors']

/* Create a function that randomly generates the computers choice */

let getComputerChoice = () => {
    let computerSelection = choices[Math.floor(Math.random() * choices.length)];
    console.log(computerSelection);
    return choices.indexOf(computerSelection);
}

/* Provide user with the 3 choices to play against computer.
Convert player choice to lowercase for case insensitivity.
Confirm spelling with choices reference check*/

let getPlayerChoice = () => {
    let input = prompt('Make your pick!', 'Type rock, paper, or scissors');
    console.log(input);
    let playerSelection = input.toLowerCase();
    console.log(choices.indexOf(playerSelection));

    if (choices.indexOf(playerSelection) > -1){
        console.log(playerSelection);
        return choices.indexOf(playerSelection);
    } else {
        getPlayerChoice();
    }
}

/* Create a function that evaluates user versus computer selection */
let playRound = (computerSelection, playerSelection) => {
    if (computerSelection == 0){
        if (playerSelection == 0){
            prompt("It's a TIE!, Try Again");
            return
        } else if (playerSelection == 2){
            prompt('You Lose! Rock beats Scissors');
            return
        } else {
            prompt('You win!, Paper beats Rock');
            return
        }
        }
    if (computerSelection == 1){
        if (playerSelection == 1){
            prompt("It's a TIE!, Try Again");
            return
        } else if (playerSelection == 0){
            prompt("You Lose! Paper beats Rock");
            return
        } else {
            prompt('You win!, Scissors beats Paper');
            return
        }
        }
        if (computerSelection == 2){
            if (playerSelection == 2){
                prompt("It's a TIE!, Try Again");
                return
            } else if (playerSelection == 1){
                prompt("You Lose! Scissors beat Paper");
                return
            } else {
                prompt('You win!, Rock beats Scissors');
                return
            }
            }
    }

const computerSelection = getComputerChoice();
const playerSelection = getPlayerChoice();
console.log(playRound(computerSelection, playerSelection));
/* Display a message that declares the winner */
