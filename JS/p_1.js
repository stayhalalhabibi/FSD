// ROCK PAPPER SCISSORS

const choice = ["rock", "paper", "scissors"];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");

function playGame(playerChoice){


    const computerChoice = choices[Math.floor(Math.random () * 3)];

\
    //console.log(computerChoice);
    let result = "";

    if(playerChoice === computerChoice){
        result = "ITS A TIE";
    }
    else{
        switch(playerChoice){
            case "rock":
                computerChoice === ("scissors") ? "YOU WIN!"  
        }
    }
}