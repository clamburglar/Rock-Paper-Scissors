/* Create a function that plays five rounds and  declares the winner of the game */

let roundNum = 1;
let computerScore = 0;
let playerScore = 0;

const body = document.querySelector('body');
let rockButton = document.createElement('button');
rockButton.textContent = 'Rock';
let paperButton = document.createElement('button');
paperButton.textContent = 'Paper';
let scissorsButton = document.createElement('button');
scissorsButton.textContent = 'Scissors';

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        playerSelection = button.textContent;
        console.log(playerSelection);
    });
});

body.appendChild(rockButton);
body.appendChild(paperButton);
body.appendChild(scissorsButton);


console.log('Round Number: ' + roundNum);
console.log('Computer Score: ' + computerScore);
console.log('Player Score: ' + playerScore);

/* Declare rock, paper, scissors, and their individual hierarchy */

const choices = ['Rock', 'Paper', 'Scissors']

/* Create a function that randomly generates the computers choice */

getComputerChoice = () => {
    let computerSelection = choices[Math.floor(Math.random() * choices.length)];
    console.log(computerSelection);
    return computerSelection;
}

/* Create a function that evaluates user versus computer selection and
display a message that declares the winner of a single round, increment scores*/

playRound = (computerSelection, playerSelection) => {
    if (computerSelection == choices[0]){
        if (playerSelection == choices[0]){
            roundNum = roundNum - 1;
            return ("It's a TIE!, Try Again");
        } else if (playerSelection == choice[2]){
            computerScore = computerScore + 1;
            return ('You Lose!, Rock beats Scissors');
        } else {
            playerScore = playerScore + 1;
            return ('You win!, Paper beats Rock');
            }
        }
    if (computerSelection == choices[1]){
        if (playerSelection == choices[1]){
            roundNum = roundNum - 1;
            return ("It's a TIE!, Try Again");
        } else if (playerSelection == choices[0]){
            computerScore = computerScore + 1;
            return('You Lose!, Paper beats Rock');
        } else {
            playerScore = playerScore + 1;
            return ('You win!, Scissors beats Paper');
        }
        }
    if (computerSelection == choices[2]){
        if (playerSelection == choices[2]){
            roundNum = roundNum - 1;
            return ("It's a TIE!, Try Again");
        } else if (playerSelection == choices[1]){
            computerScore = computerScore + 1;
            return('You Lose!, Scissors beats Rock');
        } else {
            playerScore = playerScore + 1;
            return('You win!, Rock beats Scissors');
            
        }
        }
    }

    /*Call the function to play a round*/

const computerSelection = getComputerChoice();

    /*Compare scores until 5 is reached, then communicate the game
    winner */

if (computerScore == 5){
    console.log('Sorry!, You lost');
    
}
if (playerScore == 5){
    console.log('Congrats!, You won!');
    
}

/* Increment round counter*/

roundNum = roundNum + 1;