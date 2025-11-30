// getComputerChoice
function getComputerChoice(){
    let random = Math.floor(Math.random() * 3);
    if (random === 0){
        return "rock";
    }else if (random === 1){
        return "paper";
    }else{
        return "scissors"
    }
} 

// getHumanChoice
function getHumanChoice(){
    while (true){
        let choices = prompt(`round ${rounds}\nhuman: ${humanScore}\ncomputer: ${computerScore}`).toLowerCase();
        let choice = choices.toLowerCase();
        if (choice === "rock" || choice === "paper" || choice === "scissors") {
            return choice;
        }
    }
}

// playRound (round logic)
function playRound(humanSelection, computerSelection){
    const match = `${humanSelection} - ${computerSelection}`

    switch (match){
        // --- DRAW CASES ---
        case "paper - paper":
        case "scissors - scissors":
        case "rock - rock":
            console.log("Draw!\n"+match);
            break;

        // -- HUMAN WINS CASES --
        case "rock - scissors":
        case "paper - rock":
        case "scissors - paper":
            console.log("Human Wins!\n"+match);
            humanScore += 1;
            break;
        
        // -- COMPUTER WINS CASES -- 
        case "rock - paper":
        case "paper - scissors":
        case "scissors - rock":
            console.log("Computer Wins!\n"+match);
            computerScore +=1;
            break
    }
}

// while Loop 5 Rounds
rounds = 1;
let humanScore = 0;
let computerScore = 0;
while (true){
    if (rounds === 6){
        if (humanScore > computerScore){
            console.log("Game Over, Human Wins\n"+`final score : human (${humanScore}) - (${computerScore}) computer`)
        }else if (computerScore > humanScore){
            console.log("Game Over, Computer Wins!\n"+`final score : human (${humanScore}) - (${computerScore}) computer`)
        }else{
            console.log("DRAW!!!\n"+`final score : human (${humanScore}) - (${computerScore}) computer`)
        }
        break
    }
    console.log(`round: ${rounds}`)
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();

    playRound(humanSelection, computerSelection);

    
    

    rounds++;
}
    