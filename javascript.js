let roundNum = 1;
let computerScore = 0;
let playerScore = 0;

/*Creation of three buttons defining available player choices and 
a div to populate with scores and messages */

const body = document.querySelector('body');
let rockButton = document.createElement('button');
rockButton.textContent = 'Rock';
let paperButton = document.createElement('button');
paperButton.textContent = 'Paper';
let scissorsButton = document.createElement('button');
scissorsButton.textContent = 'Scissors';
let resDis = document.createElement('div');
let scoreBoard = document.createTextNode('Computer Score: ' + computerScore + ' Player Score: '
+ playerScore );
var lineBreak = document.createElement('br');
let reward = document.createTextNode('Your move!, first to 5 points wins!');

body.appendChild(resDis);
resDis.appendChild(scoreBoard);
resDis.appendChild(lineBreak)
resDis.appendChild(reward)
body.appendChild(rockButton);
body.appendChild(paperButton);
body.appendChild(scissorsButton);

/* Declare choices for computer selection and player comparison */

const choices = ['Rock', 'Paper', 'Scissors'];

/* Create a function that randomly generates the computers choice */

getComputerChoice = () => {
    let computerSelection = choices[Math.floor(Math.random() * choices.length)];
    console.log('Computer Choice: ' + computerSelection);
    return computerSelection;
};

/* Create a function that evaluates user versus computer selection and
display a message that declares the winner of a single round, 
increment scores and round number*/

playRound = (computerSelection, playerSelection) => {
    if (computerSelection == playerSelection) {
        scoreBoard.nodeValue = 'Computer Score: ' + computerScore + ' Player Score: ' + playerScore;
        reward.nodeValue = "It's a TIE!, Try Again";
    } else if ((computerSelection == choices[0] && playerSelection == choices[2]) ||
    (computerSelection == choices[1] && playerSelection == choices[0]) ||
    (computerSelection == choices[2] && playerSelection == choices[1])) {
        computerScore = computerScore + 1;
        scoreBoard.nodeValue = 'Computer Score: ' + computerScore + ' Player Score: ' + playerScore;
        reward.nodeValue = 'You lost this round! Try again!';
    } else {
        playerScore = playerScore + 1;
        scoreBoard.nodeValue = 'Computer Score: ' + computerScore + ' Player Score: ' + playerScore;
        reward.nodeValue = 'You won this round! Keep going!';
    }
}    

/* Add a listener to each of the button to play a round on click with selected
value returned */

const buttons = document.body.querySelectorAll('button');
for (const button of buttons) {
    button.addEventListener('click', () => {
        playerSelection = button.textContent;
        console.log('Player Choice: ' + playerSelection);
        computerSelection = getComputerChoice();
        while (computerScore < 5 && playerScore < 5) { 
            playRound(computerSelection, playerSelection);
            break
        };
        if (computerScore == 5 || playerScore ==5) {
            if (computerScore == 5) {
                reward.nodeValue = "Sorry, You lost the game! Play again?";
            } else {
                reward.nodeValue = " Congrats, You won the game! Play again?";
            }
        }
    });
}
