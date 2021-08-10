
let p = 0;
let c = 0;
let stringText;
let result;

function computerPlay(){
    compMove = Math.floor(Math.random() * (3) + 1);

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




function game(){



        const container = document.querySelector('#resultContainer');
        const scoreContainer = document.querySelector('#scoreContainer');
        const winnerContainer = document.querySelector('#winnerContainer');

        const content = document.createElement('div');
        content.classList.add('content');

        const score = document.createElement('div');
        score.classList.add('score');

        const winner = document.createElement('div');
        winner.classList.add('winner');

        const rockBtn = document.querySelector('#rock');
        rockBtn.addEventListener('click', function(){
            if (!(p == 5 || c == 5)){
                result = playRound('rock', computerPlay());
                content.textContent = result;
                score.textContent = "              Score:\r\n Player: " + p + " Computer: " + c;
            }
            if (p == 5){
                winner.textContent = "Congratulations! Player has won.";
            }

            else if (c == 5){
                winner.textContent = "Better luck next time! Computer has won.";
            }

        });
    
        const scissorsBtn = document.querySelector('#scissors');
        scissorsBtn.addEventListener('click', function(){
            if (!(p == 5 || c == 5)){
                result = playRound('scissors', computerPlay());
                content.textContent = result;
                score.textContent = "              Score:\r\n Player: " + p + " Computer: " + c;
            }
            if (p == 5){
                winner.textContent = "Congratulations! Player has won.";
            }

            else if (c == 5){
                winner.textContent = "Better luck next time! Computer has won.";
            }
        });
    
        const paperBtn = document.querySelector('#paper');
        paperBtn.addEventListener('click', function(){
            if (!(p == 5 || c == 5)){
                result = playRound('paper', computerPlay());
                content.textContent = result;
                score.textContent = "              Score:\r\n Player: " + p + " Computer: " + c;
            }
            if (p == 5){
                winner.textContent = "Congratulations! Player has won.";
            }

            else if (c == 5){
                winner.textContent = "Better luck next time! Computer has won.";
            }
    });
        container.appendChild(content);
        scoreContainer.appendChild(score);
        winnerContainer.appendChild(winner);

    }



game();

