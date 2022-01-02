//function computerPlay:
//Get random number to represent rock, paper and scissors individually.
//return that number to the fucntion variable.

//fuction playRound:
//make player selection a prompt that.
//set variables for each outcome string
//  - what happens if paper wins, or if the player wins vs computer.

//function game:
//setup score variables for player and computer
//add a variable that stores who the winner of the previous round was.
//check variable for the winner of the previous round.
//add score depending on winner
//setup a loop that doesn't end until either player gets a score of 5.  

function computerPlay() {
    //sets a random number between 0-0.99
    let randomNum = Math.random().toFixed(2);
    let randomChoice;
    if (randomNum < 0.33) {
        randomChoice = 'rock';
    }
    else if (randomNum < 0.66) {
        randomChoice = 'paper';
    }
    else {
        randomChoice = 'scissors';
    }
    return randomChoice
}

function playRound(playerSelection, computerSelection) {
    const paperWins = 'paper beats ';
    const rockWins = 'rock beats ';
    const scissorsWin = 'scissors beat ';
    const gunWins ='gun beats '
    //rock paper or scissors
    let winningChoice;
    //boolean
    let victory;
    let winner;
    let loser;
    //variable for string message that prints to user
    let outcome;

    playerSelection = playerSelection.toLowerCase();

    //sets winning conditions.
    if (playerSelection === 'rock') {
        if (computerSelection === 'paper') {
            winningChoice = paperWins;
            victory = false;
        }
        else {
            winningChoice = rockWins;
            victory = true;
        }
    }
    else if (playerSelection === 'paper') {
        if (computerSelection === 'scissors') {
            winningChoice = scissorsWin;
            victory = false;
        }
        else {
            winningChoice = paperWins;
            victory = true;
        }
    }
    else if (playerSelection === 'scissors') {
        if (computerSelection === 'rock') {
            winningChoice = rockWins;
            victory = false;
        }
        else {
            winningChoice = scissorsWin;
            victory = true;
        }
    }
    else if (playerSelection === 'gun') {
        winningChoice = gunWins;
        victory = true;
    }
    else if (playerSelection === 'fish') {
        victory = false;
        if (computerSelection === 'rock') {
            winningChoice = rockWins;
        }
        else if (computerSelection === 'paper') {
            winningChoice = paperWins;
        }
        else {
            winningChoice = scissorsWin;
        }
    }
    else {
        outcome = 'Please pick rock, paper or scissors...';
        return outcome;
    }

    //sets winner and loser conditions.
    if (victory === true) {
        winner = 'You win';
        loser = computerSelection;
    }
    else {
        winner = 'You lose';
        loser = playerSelection;
    }

    //Outcome of round.
    if (playerSelection === computerSelection) {
        outcome = "It's a tie...";
        return outcome;
    }
    else {
        outcome = winner + ', ' + winningChoice + loser + '!'  ;
        return outcome;
    }
}

function game() {
    let playerScore = 0;
    let computerScore = 0;
    let roundOutcome;
    let rounds = 0

    while (true) {
        playerSelection = prompt('Rock, paper or scissors? ');
        computerSelection = computerPlay();
        roundOutcome = playRound(playerSelection, computerSelection);
        console.log(roundOutcome);
        roundOutcome = roundOutcome.split(" ");
        winOrLose = roundOutcome[1];
        
        if (winOrLose.startsWith('win')) {
            ++playerScore;
            ++rounds
            console.log('Round: ' + rounds + '    ' + 'Score: ' + playerScore + '    ' + 'Enemy Score: ' + computerScore);
        }
        else if (winOrLose.startsWith('lose')) {
            ++computerScore;
            ++rounds;
            console.log('Round: ' + rounds + '    ' + 'Score: ' + playerScore + '    ' + 'Enemy Score: ' + computerScore);            
        }

        if (playerScore === 5 || computerScore === 5) {
            break;
        }
    }

    if (playerScore === 5) {
        console.log('\n' + 'Congratulations, you won!!!');
    }
    else {
        console.log('\n' + 'Better luck next time loser...');
    }
}




game();