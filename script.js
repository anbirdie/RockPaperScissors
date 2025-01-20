const ROCK = 'rock';
const PAPER = 'paper';
const SCISSORS = 'scissors';

const CHOICES = [ROCK, PAPER, SCISSORS];

let humanScore = 0;
let computerScore = 0;

let humanChoice;
let computerChoice;

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function getComputerChoice() {
  const result = getRandomInt(CHOICES.length);
  return CHOICES[result];
}

function getHumanChoice() {
  let userInput = prompt("Enter your choice (rock, paper, or scissors):").toLowerCase();
  while (!CHOICES.includes(userInput)) {
    userInput = prompt(`Invalid input. Please enter one of the following: ${CHOICES.join(', ')}`).toLowerCase();
  }
  return userInput;
}

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    console.log(`It's a tie! Both chose ${humanChoice}`);
    return;
  }

  const winnerCombos = {
    rock: 'scissors',
    paper: 'rock',
    scissors: 'paper'
  }

  if (winnerCombos[humanChoice] === computerChoice) {
    console.log(`You win! ${humanChoice} beats ${computerChoice}`);
    humanScore++;
  } else {
    console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
    computerScore++;
  }
}

function game() {
  console.log('Welcome to Rock, Paper, and Scissors');
  const rounds = 5;

  for (let r = 0; r < 5; r++) {
    console.log(`%c____ROUND ${r + 1}____`, 'color: green;')
    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();

    console.log(`Human choice: ${humanChoice} - Computer choice: ${computerChoice}`);
    playRound(humanChoice, computerChoice);
    console.log('____________________________');

    console.log(`Human score: ${humanScore} - Computer score: ${computerScore}`);
  }

  console.log('Game Over!');
  if (humanScore > computerScore) {
    console.log(`Congrats!! You won with a score of ${humanScore} to ${computerScore}`);
  } else if (computerScore > humanScore) {
    console.log(`All the best next time. You lost with a score of ${humanScore} to ${computerScore}`);
  } else {
    console.log(`It's a tie! Final score: ${humanScore} to ${computerScore}`);
  }
}

// start the game
game();