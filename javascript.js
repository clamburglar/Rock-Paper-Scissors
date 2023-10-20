game = () => {
    
 /* Create a function that plays five rounds and  declares the winner of the game */
    
    let roundNum = 1;
    let computerScore = 0;
    let playerScore = 0;

    while (roundNum < 6){
        console.log('Round Number: ' + roundNum);
        console.log('Computer Score: ' + computerScore)
        console.log('Player Score: ' + playerScore);

        /* Declare rock, paper, scissors, and their individual hierarchy */

        const choices = ['rock', 'paper', 'scissors']

        /* Create a function that randomly generates the computers choice */

        getComputerChoice = () => {
            let computerSelection = choices[Math.floor(Math.random() * choices.length)];
            console.log(computerSelection);
            return choices.indexOf(computerSelection);
        }

        /* Provide user with the 3 choices to play against computer.
        Convert player choice to lowercase for case insensitivity.
        Confirm spelling with choices reference check*/

        getPlayerChoice = () => {
            let input = prompt('Make your pick!', 'Type rock, paper, or scissors');
            let playerSelection = input.toLowerCase();

            if (choices.indexOf(playerSelection) > -1){
                console.log(playerSelection);
                return choices.indexOf(playerSelection);
            } else {
                getPlayerChoice();
            }
        }

        /* Create a function that evaluates user versus computer selection and
        display a message that declares the winner of a single round, increment scores*/
        
        playRound = (computerSelection, playerSelection) => {
            if (computerSelection == 0){
                if (playerSelection == 0){
                    roundNum = roundNum - 1;
                    return ("It's a TIE!, Try Again");
                } else if (playerSelection == 2){
                    computerScore = computerScore + 1;
                    return ('You Lose!, Rock beats Scissors');
                } else {
                    playerScore = playerScore + 1;
                    return ('You win!, Paper beats Rock');
                    }
                }
            if (computerSelection == 1){
                if (playerSelection == 1){
                    roundNum = roundNum - 1;
                    return ("It's a TIE!, Try Again");
                } else if (playerSelection == 0){
                    computerScore = computerScore + 1;
                    return('You Lose!, Paper beats Rock');
                } else {
                    playerScore = playerScore + 1;
                    return ('You win!, Scissors beats Paper');
                }
                }
            if (computerSelection == 2){
                if (playerSelection == 2){
                    roundNum = roundNum - 1;
                    return ("It's a TIE!, Try Again");
                } else if (playerSelection == 1){
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
        const playerSelection = getPlayerChoice();
        console.log(playRound(computerSelection, playerSelection));

        /*Compare scores until best 3 of 5 is reached, then communicate the
         game winner */

        if (computerScore == 3){
            console.log('Sorry!, You lost best 3 of 5');
            break
        }
        if (playerScore == 3){
            console.log('Congrats!, You won best 3 of 5');
            break
        }

        /* Increment round counter*/

        roundNum = roundNum + 1;
    }
   }
console.log(game())
