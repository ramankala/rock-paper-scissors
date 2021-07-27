
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

function game(playerSelection, computerSelection){

    playRound(playerSelection, computerSelection);
    console.log("Score:");
    console.log("Player: " + p + " Computer: " + c);

}


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