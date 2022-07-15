function getComputerChoice() {
  const options = ['rock', 'paper', 'scisors']
  const randomValue = Math.floor(Math.random() * options.length)
  const randpmOption = options[randomValue]
  return randpmOption
}

const pcValue = getComputerChoice()

function singleRound(human, pc) {
  if (human === 'rock') {
    if (pc === 'rock') {
      console.log(`it is a tie!`)
    }
    if (pc === 'paper') {
      console.log(`you lose, a paper beats a rock!`)
    }
    if (pc === 'scisors') {
      console.log(`you win! scisors beat a rock!`)
    }
  } else if (human === 'paper') {
    if (pc === 'rock') {
      console.log(`you win! a paper beats a rock!`)
    }
    if (pc === 'scisors') {
      console.log(`you lose, a scisors beats a paper!`)
    }
    if (pc === 'paper') {
      console.log(`it's a tie!`)
    }
  } else if (human === 'scisors') {
    if (pc === 'rock') {
      console.log(`you lose, a rock beats a scisors!`)
    }
    if (pc === 'paper') {
      console.log(`you win, a scisors beats a papaer!`)
    }
    if (pc === 'scisors') {
      console.log(`it's a tie!`)
    }
  }
}

singleRound('rock', pcValue)
console.log(pcValue)
