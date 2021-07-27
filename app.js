//Randomly returns either rock, paper, or scissors
//use math.random() to get a number between 1-3
//use if -else statements where if the numbers are 
//1, return rock, 2, return paper, 3, return scissors


//BUG: game is buggy, score doesn't always print after every game**FIXED**
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
        p += 1;
        return console.log("You Win! Rock beats Scissors.");
    } 

    else if (player === 'rock' && computer === 'paper'){
        c += 1;
        return console.log('You Lose! Paper beats Rock.');
    } 

    else if (player === 'rock' && computer === 'rock'){
        return console.log('Draw!');
    }

    else if (player === 'paper' && computer === 'scissors'){
        c += 1;
        return console.log("You Lose! Scissors beats Paper.");
    } 

    else if (player === 'paper' && computer === 'paper'){
        return console.log('Draw!');
    } 

    else if (player === 'paper' && computer === 'rock'){
        p += 1;
        return console.log('You Win! Paper beats Rock.');
    }

    else if (player === 'scissors' && computer === 'scissors'){
        return console.log("Draw!");
    } 

    else if (player === 'scissors' && computer === 'paper'){
        p += 1;
        return console.log('You Win! Scissors beats Paper.');
    } 

    else if (player === 'scissors' && computer === 'rock'){
        c += 1;
        return console.log('You Lose! Rock beats Scissors.');
    }



}

//BUG: one value is being passed for computerSelection**FIXED
// Thats why either computer wins 5-0 or player wins 5-0
function game(playerSelection, computerSelection){

    playRound(playerSelection, computerSelection);
    console.log("Score:");
    console.log("Player: " + p + " Computer: " + c);

}


//console.log(playRound(playerSelection, computerSelection));

for (let i = 1; i <=5; i++){
    const computerSelection = computerPlay();
    const playerSelection = prompt("Enter your selection");
    if (playerSelection === null && playerSelection === ''){
        break;
    }
    else {
        game(playerSelection, computerSelection);
    }
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