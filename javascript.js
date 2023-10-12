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
                    alert("It's a TIE!, Try Again");
                    return 
                } else if (playerSelection == 2){
                    computerScore = computerScore + 1;
                    alert('You Lose!, Rock beats Scissors');
                    return
                } else {
                    playerScore = playerScore + 1;
                    alert('You win!, Paper beats Rock');
                    return
                }
                }
            if (computerSelection == 1){
                if (playerSelection == 1){
                    roundNum = roundNum - 1;
                    alert("It's a TIE!, Try Again");
                    return
                } else if (playerSelection == 0){
                    computerScore = computerScore + 1;
                    alert('You Lose!, Paper beats Rock');
                    return
                } else {
                    playerScore = playerScore + 1;
                    alert('You win!, Scissors beats Paper');
                    return
                }
                }
            if (computerSelection == 2){
                if (playerSelection == 2){
                    roundNum = roundNum - 1;
                    alert("It's a TIE!, Try Again");
                    return
                } else if (playerSelection == 1){
                    computerScore = computerScore + 1;
                    alert('You Lose!, Scissors beats Rock');
                    return
                } else {
                    playerScore = playerScore + 1;
                    alert('You win!, Rock beats Scissors');
                    return
                }
                }
            }

        /*Call the function to play a round*/

        const computerSelection = getComputerChoice();
        const playerSelection = getPlayerChoice();
        console.log(playRound(computerSelection, playerSelection));

        /*Create a function that compares scores until best 3 of 5 is reached, 
        then communicate the game winner */

        if (computerScore == 3){
            alert('Sorry!, You lost best 3 of 5');
            break
        }
        if (playerScore == 3){
            alert('Congrats!, You won best 3 of 5');
            break
        }

        /* Increment round counter*/

        roundNum = roundNum + 1;
    }
   }
console.log(game())
