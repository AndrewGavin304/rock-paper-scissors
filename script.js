function computerPlay(){
    let options = ["rock", "paper", "scissors"];
    return options[Math.floor(Math.random()*options.length)];
}

function userPlay(){
    let choice = target.id;
    console.log(choice)
    return choice;
}

function playRound(playerSelection){
    let computerSelection = computerPlay();
    if (playerSelection == computerSelection){
        console.log(`Tie!  You both chose ${playerSelection}`);
        return "tie";
    }
    else if ((playerSelection == 'rock' && computerSelection == 'scissors') || (playerSelection == 'paper' && computerSelection == 'rock') || (playerSelection == 'scissors' && computerSelection == 'paper')) {
        console.log(`You win!  You chose ${playerSelection} and the robot chose ${computerSelection}.`);
        return "win";
    }
    else {
        console.log(`You lose!  You chose ${playerSelection} and the robot chose ${computerSelection}.`);
        return "loss";
    }
}

const buttonContainer = document.getElementById("buttonContainer");

buttonContainer.addEventListener('click', (e) => {
    if (e.target.id == "buttonContainer"){
    return false;
    }
    playRound(e.target.id)
})


// function game(){
//     let userWins = 0;
//     let cpuWins = 0;
//     let draws = 0;
//     for (let i = 0; i < 5; i++){
//         let playerSelection = userPlay();
//         let computerSelection = computerPlay();
//         let result = playRound(playerSelection, computerSelection);
//         if (result == "win") {
//             userWins++
//         }
//         else if (result == "loss") {
//             cpuWins++
//         }
//         else {
//             draws++
//         }
//         console.log(`Current score is ${userWins}-${cpuWins}-${draws}`);
//     }
// }


