
let p = 0;
let c = 0;
let stringText;
let result;

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
        stringText = "You Win! Rock beats Scissors.";
        return stringText;
    } 

    else if (player === 'rock' && computer === 'paper'){
        c += 1;
        stringText = 'You Lose! Paper beats Rock.'
        return stringText;
    } 

    else if (player === 'rock' && computer === 'rock'){
        stringText = 'Draw!';
        return stringText;
    }

    else if (player === 'paper' && computer === 'scissors'){
        c += 1;
        stringText = "You Lose! Scissors beats Paper."
        return stringText;
    } 

    else if (player === 'paper' && computer === 'paper'){
        stringText = 'Draw!';
        return stringText;
    } 

    else if (player === 'paper' && computer === 'rock'){
        p += 1;
        stringText = 'You Win! Paper beats Rock.'
        return stringText;
    }

    else if (player === 'scissors' && computer === 'scissors'){
        stringText = "Draw!";
        return stringText;
    } 

    else if (player === 'scissors' && computer === 'paper'){
        p += 1;
        stringText = 'You Win! Scissors beats Paper.'
        return stringText;
    } 

    else if (player === 'scissors' && computer === 'rock'){
        c += 1;
        stringText = 'You Lose! Rock beats Scissors.'
        return stringText;
    }



}

// const playerSelection = "rock";

const computerSelection = computerPlay();
//console.log(playRound(playerSelection, computerSelection));

function game(playerSelection, computerSelection){

    const container = document.querySelector('#container');
    const content = document.createElement('div');
    content.classList.add('content');

    const rockBtn = document.querySelector('#rock');
    rockBtn.addEventListener('click', function(){
        result = playRound('rock', computerPlay());
        content.textContent = result;

        console.log("Score:");
        console.log("Player: " + p + " Computer: " + c);
    });

    const scissorsBtn = document.querySelector('#scissors');
    scissorsBtn.addEventListener('click', function(){
        result = playRound('scissors', computerPlay());
        content.textContent = result;

        console.log("Score:");
        console.log("Player: " + p + " Computer: " + c);
    });

    const paperBtn = document.querySelector('#paper');
    paperBtn.addEventListener('click', function(){
        result = playRound('paper', computerPlay());
        content.textContent = result;

        console.log("Score:");
        console.log("Player: " + p + " Computer: " + c);
});

    container.appendChild(content);

    if (p > c){
        console.log("Congratulations! Player has won.");
    }
    
    else if (p == c){
        console.log("Draw Game!")
    }
    else {
        console.log("Better luck next time! Computer has won.");
    }

    // playRound(playerSelection, computerSelection);

}


// for (let i = 1; i <=5; i++){
//     const computerSelection = computerPlay();
//     const playerSelection = prompt("Enter your selection");
//     if (playerSelection === null && playerSelection === ''){
//         break;
//     }
//     else {
//         game(playerSelection, computerSelection);
//     }
// }

game();


//d. Display the running score, and announce a winner of the game once one player reaches 5 points.
//create elements/divs on the page for the player and computer names
//written on the page, and a another div for the count itself
//count has to update
//have to work in a game of 5, most likely using a loop
//work on displaying the running score first, then make it play a game of 5