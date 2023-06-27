let playerSelection;
let computerSelection;
let playerScore = 0
let computerScore = 0

const p = document.querySelector('#rounds')
const player_Score = document.getElementById('player-score')
const computer_Score = document.getElementById('computer-score')
const buttons = document.querySelectorAll('#button')

const getComputerChoice = () => {
    //Generate computer choice from the array
    const choice = ['Rock', 'Paper', 'Scissors']
    const randomChoice = choice[Math.floor(Math.random() * choice.length)]
    return randomChoice
}

computerSelection = getComputerChoice()

// Create a function to disable all buttons
const disableButtons = () => {
    buttons.forEach((button) => {
      button.setAttribute('disabled', '');
    });
  }

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        playerSelection = button.value
        game()
        if (playerScore >= 5 && computerScore < 5) {
            p.textContent = `Game Over. You Win`
            disableButtons()

        } else if (playerScore < 5 && computerScore >= 5) {
            p.textContent = `Game Over. Computer Win`
            disableButtons()
        }
    })
})


const gameRound = (playerSelection, computerSelection) => {
    computerSelection = getComputerChoice()
    let result = ''
    if (playerSelection == 'rock') {
        if (computerSelection == 'Paper') {
            result = `You Lose! ${computerSelection} wins ${capitalise(playerSelection)}`
        } else if (computerSelection == 'Scissors') {
            result = `You Win! ${capitalise(playerSelection)} wins ${computerSelection}`
        } else {
            result = 'Its a tie'
        }
    }
    if (playerSelection == 'paper') {
        if (computerSelection == 'Scissors') {
            result = `You Lose! ${computerSelection} wins ${capitalise(playerSelection)}`
        } else if (computerSelection == 'Rock') {
            result = `You Win! ${capitalise(playerSelection)} wins ${computerSelection}`
        } else {
            result = 'Its a tie'
        }
    }
    if (playerSelection == 'scissors') {
        if (computerSelection == 'Rock') {
            result = `You Lose! ${computerSelection} wins ${capitalise(playerSelection)}`
        } else if (computerSelection == 'Paper') {
            result = `You Win! ${capitalise(playerSelection)} wins ${computerSelection}`
        } else {
            result = 'Its a tie'
        }
    }
    return result
}

const game = () => {
    const gamePlayed = gameRound(playerSelection, computerSelection)
    if(gamePlayed.match('You Win')) {
        playerScore++
    }
    if (gamePlayed.match('You Lose')) {
        computerScore++
    }
    
    p.textContent = gamePlayed
    player_Score.textContent = playerScore
    computer_Score.textContent = computerScore
}

const capitalise = (str) => {
    const firstWord = str.slice(0, 1).toUpperCase() + str.slice(1)
    return firstWord
}

const restartButton = document.querySelector('#btn')
restartButton.addEventListener('click', () => {
    window.location.reload()
})