//function computerPlay:
//Get random number to represent rock, paper and scissors individually.
//return that number to the fucntion variable.

//fuction playRound:
//make player selection a prompt that.
//set variables for each outcome string
//  - what happens if paper wins, or if the player wins vs computer.



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
    let winningChoice;
    let victory;
    let winner;
    let loser;
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
    else {
        console.log('Please pick rock, paper or scissors...')
        return;
    }

    //sets winner and loser conditions.
    if (victory === true) {
        winner = 'You win, ';
        loser = computerSelection;
    }
    else {
        winner = 'You lose, ';
        loser = playerSelection;
    }

    //Outcome of round.
    if (playerSelection === computerSelection) {
        console.log("It's a tie!");
    }
    else {
        outcome = winner + winningChoice + loser + '!'  ;
    }
    console.log(outcome);
}


playerSelection = prompt('Rock, paper or scissors? ');
computerSelection = computerPlay();

playRound(playerSelection, computerSelection);