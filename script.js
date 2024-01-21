function getComputerChoice() {
    // array of options to choose from
    const options = ["Rock", "Paper", "Scissors"];
    // randomly selections option
    let computerSelection = options[Math.floor(Math.random()*options.length)]
    // console.log value
    return computerSelection
}

function playRound(playerSelection, computerSelection, playerScore, cpuScore) {
    playerSelection = playerSelection.toLowerCase()
    computerSelection = computerSelection.toLowerCase()

    if (playerSelection == "rock" && computerSelection == "scissors") {
        return(`You Win! Rock beats Scissors.`)
    } else if (playerSelection == "rock" && computerSelection == "paper") {
        return(`You Lose! Paper beats Rock.`) 
    } else if (playerSelection == "scissors" && computerSelection == "paper") {
        return(`You Win! Rock beats Scissors.`)
    } else if (playerSelection == "scissors" && computerSelection == "rock") {
        return(`You Lose! Rock beats Scissors.`)
    } else if (playerSelection == "paper" && computerSelection == "rock") {
        return(`You Win! Paper beats Rock.`)
    } else if (playerSelection == "paper" && computerSelection == "scissors") {
        return(`You Lose! Scissors beats Paper.`)
    } else if (playerSelection == computerSelection) {
        return(`You Tie!`)
    }

}

function game() {

    let playerScore = 0
    let cpuScore = 0

    while (playerScore < 5 && cpuScore < 5) {
        let playerChoice = prompt("Enter Rock, Paper or Scissors.") 
        let cpuChoice = getComputerChoice()
        let results = playRound(playerChoice, cpuChoice)

        console.log(results)
        if (results.includes('Win')) {
            playerScore++;
        } else if (results.includes('Lose')) {
            cpuScore++;
        }
        console.log(`${playerScore} - ${cpuScore}`)
    }

    if (playerScore == 5) {
        console.log (`You Win! ${playerScore} - ${cpuScore}`)
    } else if (cpuScore == 5) {
        console.log (`You Lose! ${playerScore} - ${cpuScore}`)
    }

}

game();