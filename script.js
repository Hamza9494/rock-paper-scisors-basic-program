// get a random choic from computer
function getComputerChoice() {
  const options = ['rock', 'paper', 'scisors']
  const randomValue = Math.floor(Math.random() * options.length)
  const randpmOption = options[randomValue]
  return randpmOption
}

// play a single round
function singleRound(human, pc) {
  if (human === 'rock') {
    if (pc === 'rock') {
      return `it is a tie!`
    }
    if (pc === 'paper') {
      return `you lose, a paper beats a rock!`
    }
    if (pc === 'scisors') {
      return `you win! a rock beat a sciosrs!`
    }
  } else if (human === 'paper') {
    if (pc === 'rock') {
      return `you win! a paper beats a rock!`
    }
    if (pc === 'scisors') {
      return `you lose, a scisors beats a paper!`
    }
    if (pc === 'paper') {
      return `it's a tie!`
    }
  } else if (human === 'scisors') {
    if (pc === 'rock') {
      return `you lose, a rock beats a scisors!`
    }
    if (pc === 'paper') {
      return `you win, a scisors beats a papaer!`
    }
    if (pc === 'scisors') {
      return `it's a tie!`
    }
  }
}

// play a 5 round game
function game() {
  for (let i = 0; i < 5; i++) {
    const humanValue = window.prompt('Enter a guess')

    const pcValue = getComputerChoice()
    console.log(singleRound(humanValue, pcValue))
  }
}

game()
