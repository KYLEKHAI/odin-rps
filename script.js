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

function playRound(playerSelection, computerSelection) {
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

function game() {
  //Initializing player and computer values
  let playerWins = 0;
  let computerWins = 0;

  //For loop playing 5 rounds of the game
  for (let i = 0; i < 5; i++) {
    const playerSelection = prompt("CHOOSE BETWEEN ROCK PAPER OR SCISSORS?");
    const computerSelection = getComputerChoice(getRandomInt(3));

    const result = playRound(playerSelection, computerSelection);
    console.log(result);

    if (result.includes("YOU WIN")) {
      playerWins++;
    } else if (result.includes("YOU LOSE")) {
      computerWins++;
    }
  }

  if (playerWins > computerWins) {
    console.log("You are the winner!");
  } else if (computerWins > playerWins) {
    console.log("Computer is the winner!");
  } else {
    console.log("It's a tie!");
  }
}

game();
