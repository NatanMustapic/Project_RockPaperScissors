function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);

    if (choice === 0)
        return "rock";
    else if (choice === 1)
        return "paper";
    else if (choice === 2)
        return "scissors";
}   

function getPlayerChoice() {
    let choice = prompt("Rock, Paper or Scissors buddy? ");

    if (choice.toLowerCase()==="rock" || choice.toLowerCase()==="paper" || choice.toLowerCase()==="scissors") 
        return choice.toLowerCase();
    else
        console.log("Incorrect selection my man!");
}

function playRound(playerSelection, computerSelection){
    console.log("Your selection is " + playerSelection +", and my SMARTER selection is "+ computerSelection+".")
    if (playerSelection === computerSelection)
        console.log("Great minds do think alike... This demands a rematch!")

    else if (playerSelection === "rock" & computerSelection === "paper")
        console.log("Computers are the victorious ones! Prepare for the end.");
    else if (playerSelection === "rock" & computerSelection === "scissors")
        console.log("Even the superior brains ger outmatched sometimes... Don't get used on it!");
    
        else if (playerSelection === "paper" & computerSelection === "scissors")
        console.log("Computers are the victorious ones! Prepare for the end.");
    else if (playerSelection === "paper" & computerSelection === "rock")
        console.log("Even the superior brains ger outmatched sometimes... Don't get used on it!");

    else if (playerSelection === "scissors" & computerSelection === "rock")
        console.log("Computers are the victorious ones! Prepare for the end.");
    else if (playerSelection === "scissors" & computerSelection === "paper")
        console.log("Even the superior brains ger outmatched sometimes... Don't get used on it!");
}

function game() {
    let br = 1;
    while (br<6){
        console.log("ROUND NO. "+br+".")
        playRound(getPlayerChoice(), getComputerChoice());
        br+=1;
    }
}


game();

