let roundNum = 1;
let computerScore = 0;
let playerScore = 0;

/*Created three buttons defining available player choices */

const body = document.querySelector('body');
let rockButton = document.createElement('button');
rockButton.textContent = 'Rock';
let paperButton = document.createElement('button');
paperButton.textContent = 'Paper';
let scissorsButton = document.createElement('button');
scissorsButton.textContent = 'Scissors';

body.appendChild(rockButton);
body.appendChild(paperButton);
body.appendChild(scissorsButton);


console.log('Round Number: ' + roundNum);
console.log('Computer Score: ' + computerScore);
console.log('Player Score: ' + playerScore);

/* Declare choices for computer selection and player comparison */

const choices = ['Rock', 'Paper', 'Scissors'];

/* Create a function that randomly generates the computers choice */

getComputerChoice = () => {
    let computerSelection = choices[Math.floor(Math.random() * choices.length)];
    console.log(computerSelection);
    return computerSelection;
};

/* Create a function that evaluates user versus computer selection and
display a message that declares the winner of a single round, 
increment scores and round number*/

playRound = (computerSelection, playerSelection) => {
    if (computerSelection == playerSelection) {
        roundNum = roundNum - 1;
        console.log('tie');
        return ("It's a TIE!, Try Again");
    } else if ((computerSelection == choices[0] && playerSelection == choices[2]) ||
    (computerSelection == choices[1] && playerSelection == choices[0]) ||
    (computerSelection == choices[2] && playerSelection == choices[1])) {
        computerScore = computerScore + 1;
        roundNum = roundNum + 1;
        console.log('lost');
        return ('You Lose!');
    } else {
        playerScore = playerScore + 1;
        roundNum = roundNum + 1;
        console.log('win');
        return ('You win!');
    }
}    

/*Call the function to play a round*/



/*Compare scores until 5 is reached, then communicate the game
winner */

if (computerScore == 5){
    console.log('Sorry!, You lost');
    
}
if (playerScore == 5){
    console.log('Congrats!, You won!');
    
}

/* Add a listener to each of the button to play a round on click with selected
value returned */

const buttons = document.body.querySelectorAll('button');
for (const button of buttons) {
    button.addEventListener('click', () => {
        playerSelection = button.textContent
        console.log(playerSelection);
        computerSelection = getComputerChoice();
        playRound(computerSelection, playerSelection);
    });
};