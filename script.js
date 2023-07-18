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
rockButton.style.color = "white";
rockButton.style.backgroundColor = "black";
rockButton.style.width = "100px";
rockButton.style.height = "50px";

const paperButton = document.createElement("button");
paperButton.textContent = "PAPER";
paperButton.style.color = "white";
paperButton.style.backgroundColor = "black";
paperButton.style.width = "100px";
paperButton.style.height = "50px";

const scissorsButton = document.createElement("button");
scissorsButton.textContent = "SCISSORS";
scissorsButton.style.color = "white";
scissorsButton.style.backgroundColor = "black";
scissorsButton.style.width = "100px";
scissorsButton.style.height = "50px";

// Creating div for UI
const divResult = document.createElement("div");
const divCounter = document.createElement("div");
divCounter.style.fontWeight = "bold";

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

//Creating center for buttons
const centerButtons = document.querySelectorAll("button");

// Center the choice buttons
centerButtons.forEach((button) => {
  button.style.display = "block";
  button.style.margin = "0 auto";
});

// Apply background color to the document
document.body.style.backgroundColor = "lightgreen";

// Updating result display
function updateDisplay(result) {
  divResult.textContent = result;
  if (playerWins === 5) {
    divResult.textContent += "*** YOU WIN THE GAME! ***";
  } else if (computerWins === 5) {
    divResult.textContent += "*** YOU LOSE THE GAME ***";
  }
  divCounter.textContent = `Player: ${playerWins} - Computer: ${computerWins}`;
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
document.body.appendChild(divCounter);
