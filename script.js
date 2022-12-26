function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);

    if (choice === 0)
        return "rock";
    else if (choice === 1)
        return "paper";
    else if (choice === 2)
        return "scissors";
}   

function playRound(playerSelection, computerSelection){
    document.getElementById("output").innerHTML = "";
    document.getElementById("output").innerHTML = "Your selection is " + playerSelection +", and my SMARTER selection is "+ computerSelection+".";

    if (playerSelection === computerSelection){
        document.getElementById("output").innerHTML +=" Great minds do think alike... This demands a rematch!";
        TableWrite(playerSelection, computerSelection, "Draw");
    }
        

    else if (playerSelection === "rock" & computerSelection === "paper"){
        document.getElementById("output").innerHTML += " Computers are the victorious ones! Prepare for the end.";
        TableWrite(playerSelection, computerSelection, "Computer");
        WinnerwinnerChickenDinner("Computer");
    }
    else if (playerSelection === "rock" & computerSelection === "scissors"){
        document.getElementById("output").innerHTML +=" Even the superior brains ger outmatched sometimes... Don't get used on it!";
        TableWrite(playerSelection, computerSelection, "Human");
        WinnerwinnerChickenDinner("Human");
    }
    
    else if (playerSelection === "paper" & computerSelection === "scissors"){
        document.getElementById("output").innerHTML += " Computers are the victorious ones! Prepare for the end.";
        TableWrite(playerSelection, computerSelection, "Computer");
        WinnerwinnerChickenDinner("Computer");
    }
    else if (playerSelection === "paper" & computerSelection === "rock"){
        document.getElementById("output").innerHTML += " Even the superior brains ger outmatched sometimes... Don't get used on it!";
        TableWrite(playerSelection, computerSelection, "Human");
        WinnerwinnerChickenDinner("Human");
    }

    else if (playerSelection === "scissors" & computerSelection === "rock"){
        document.getElementById("output").innerHTML += " Computers are the victorious ones! Prepare for the end.";
        TableWrite(playerSelection, computerSelection, "Computer");
        WinnerwinnerChickenDinner("Computer");
    }
    else if (playerSelection === "scissors" & computerSelection === "paper"){
        document.getElementById("output").innerHTML +=" Even the superior brains ger outmatched sometimes... Don't get used on it!";
        TableWrite(playerSelection, computerSelection, "Human");
        WinnerwinnerChickenDinner("Human");
    }
}

function TableWrite(playerSelection, computerSelection, result){
    const resultTable = document.getElementById("results");

    var row = resultTable.insertRow(-1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);

    cell1.innerHTML = playerSelection;
    cell2.innerHTML = computerSelection;
    cell3.innerHTML = result;
}

function WinnerwinnerChickenDinner(result){
    const ComputerScore = document.getElementById("compScore");
    const HumanScore = document.getElementById("humanScore");

    var computer = parseInt(ComputerScore.innerHTML);
    var human = parseInt(HumanScore.innerHTML);

    if (result === "Computer"){
        computer +=1;
        console.log(computer);
        ComputerScore.innerHTML = computer;
    }
    else if (result === "Human"){
        human +=1;
        console.log(human);
        HumanScore.innerHTML = human;
    }
    
    //Provjera 5 dobitaka!!!
}
