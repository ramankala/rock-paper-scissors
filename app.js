//Randomly returns either rock, paper, or scissors
//use math.random() to get a number between 1-3
//use if -else statements where if the numbers are 
//1, return rock, 2, return paper, 3, return scissors


//BUG: game is buggy, score doesn't always print after every game
//Have to account for draws
//Need to retool the return values

let p = 0;
let c = 0;

function computerPlay(){
    compMove = Math.floor(Math.random() * (3 - 1 + 1) + 1);

    if (compMove === 1){
        return "Rock";
    }
    else if (compMove === 2){
        return "Paper";
    }
    else {
        return "Scissors";
    }

}

//if player selects rock and computer selections scissors
//   player wins
//else if player selects rock and computer selects paper
//   player loses
//else its a draw
//rinse and repeat for all three choices

function playRound(playerSelection, computerSelection){
    player = playerSelection.toLowerCase();
    console.log("player: " + player);
    computer = computerSelection.toLowerCase();
    console.log("computer: " + computer);

    if (player === 'rock' && computer === 'scissors'){
        console.log("You Win! Rock beats Scissors.");
        return true;
    } 

    else if (player === 'rock' && computer === 'paper'){
        console.log('You Lose! Paper beats Rock.');
        return false;
    } 

    else if (player === 'rock' && computer === 'rock'){
        console.log('Draw!');
        return null;
    }

    else if (player === 'paper' && computer === 'scissors'){
        return "You Lose! Scissors beats Paper."
    } 

    else if (player === 'paper' && computer === 'paper'){
        return 'Draw!';
    } 

    else if (player === 'paper' && computer === 'rock'){
        return 'You Win! Paper beats Rock.';
    }

    else if (player === 'scissors' && computer === 'scissors'){
        return "Draw!"
    } 

    else if (player === 'scissors' && computer === 'paper'){
        return 'You Win! Scissors beats Paper.';
    } 

    else if (player === 'scissors' && computer === 'rock'){
        return 'You Lose! Rock beats Scissors.';
    }



}

//BUG: one value is being passed for computerSelection**FIXED
// Thats why either computer wins 5-0 or player wins 5-0
function game(playerSelection, computerSelection){

    if (playRound(playerSelection, computerSelection)){
        p += 1;
        console.log("Score:");
        console.log("Player: " + p + " Computer: " + c);
    }
    else if (!playRound(playerSelection, computerSelection)){
        c += 1;
        console.log("Score:");
        console.log("Player: " + p + " Computer: " + c);
    }

}


const playerSelection = "Rock";


//console.log(playRound(playerSelection, computerSelection));

for (let i = 1; i <5; i++){
    const computerSelection = computerPlay();
    game(playerSelection, computerSelection);
}



if (p > c){
    console.log("Congratulations! Player has won.");
}

else if (p == c){
    console.log("Draw Game!")
}
else {
    console.log("Better luck next time! Computer has won.");
}