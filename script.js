function getRandomInt(max) {
  let ranNum = Math.floor(Math.random() * max);
  return ranNum;
}

function getComputerChoice(ranNum) {
  if (ranNum === 0) {
    return "Rock";
  } else if (ranNum === 1) {
    return "Paper";
  } else {
    return "Scissors";
  }
}

// Initializing player and computer values
let playerWins = 0;
let computerWins = 0;

// Creating buttons for UI
const rockButton = document.createElement("button");
rockButton.textContent = "ROCK";

const paperButton = document.createElement("button");
paperButton.textContent = "PAPER";

const scissorsButton = document.createElement("button");
scissorsButton.textContent = "SCISSORS";

// Creating div for UI
const divResult = document.createElement("div");

// Adding event listeners
rockButton.addEventListener("click", function () {
  playRound("ROCK");
});

paperButton.addEventListener("click", function () {
  playRound("PAPER");
});

scissorsButton.addEventListener("click", function () {
  playRound("SCISSORS");
});

// Updating result display
function updateDisplay(result) {
  divResult.textContent = result;
  if (playerWins === 5) {
    divResult.textContent += "*** YOU WIN THE GAME! ***";
  } else if (computerWins === 5) {
    divResult.textContent += "*** YOU LOSE THE GAME ***";
  }
}

// New playRound function
function playRound(playerSelection) {
  const computerSelection = getComputerChoice(getRandomInt(3));
  const result = getResult(playerSelection, computerSelection);

  if (result.includes("YOU WIN")) {
    playerWins++;
  } else if (result.includes("YOU LOSE")) {
    computerWins++;
  }
  updateDisplay(result);
}

function getResult(playerSelection, computerSelection) {
  if (playerSelection.toUpperCase() === computerSelection.toUpperCase()) {
    return "TIE GAME";
  } else if (
    (playerSelection.toUpperCase() === "ROCK" &&
      computerSelection.toUpperCase() === "SCISSORS") ||
    (playerSelection.toUpperCase() === "PAPER" &&
      computerSelection.toUpperCase() === "ROCK") ||
    (playerSelection.toUpperCase() === "SCISSORS" &&
      computerSelection.toUpperCase() === "PAPER")
  ) {
    return (
      "YOU WIN! " +
      playerSelection.toUpperCase() +
      " BEATS " +
      computerSelection.toUpperCase() +
      "!"
    );
  } else {
    return (
      "YOU LOSE! " +
      computerSelection.toUpperCase() +
      " BEATS " +
      playerSelection.toUpperCase() +
      "!"
    );
  }
}

// Append the buttons and divResult to the document body
document.body.appendChild(rockButton);
document.body.appendChild(paperButton);
document.body.appendChild(scissorsButton);
document.body.appendChild(divResult);
