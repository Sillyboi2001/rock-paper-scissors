const getComputerChoice = () => {
    //Generate computer choice from the array
    const choice = ['Rock', 'Paper', 'Scissors']
    const randomChoice = choice[Math.floor(Math.random() * choice.length)]
    return randomChoice
}
const gameRound = (playerSelection, computerSelection) => {
    const playerChoice1 = /rock/i
    const playerChoice2 = /paper/i
    const playerChoice3 = /scissors/i
    let draw = ''
    if (playerSelection.match(playerChoice1)) {
        if (computerSelection == 'Paper') {
            return `You Lose! ${computerSelection} wins ${playerSelection}`
        } else if (computerSelection == 'Scissors') {
            return `You Win! ${playerSelection} wins ${computerSelection}`
        } else {
            return draw = 'Its a tie'
        }
    }
    if (playerSelection.match(playerChoice2)) {
        if (computerSelection == 'Scissors') {
            return `You Lose! ${computerSelection} wins ${playerSelection}`
        } else if (computerSelection == 'Rock') {
            return `You Win! ${playerSelection} wins ${computerSelection}`
        } else {
            return draw = 'Its a tie'
        }
    }
    if (playerSelection.match(playerChoice3)) {
        if (computerSelection == 'Rock') {
            return `You Lose! ${computerSelection} wins ${playerSelection}`
        } else if (computerSelection == 'Paper') {
            return `You Win! ${playerSelection} wins ${computerSelection}`
        } else {
            return draw = 'Its a tie'
        }
    }
}

const playerChoice = 'Paper';
const computerChoice = getComputerChoice()
console.log(gameRound(playerChoice, computerChoice))
