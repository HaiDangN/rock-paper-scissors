let humanScore;
let computerScore;

function getComputerChoice() {
  let choices = ["rock", "paper", "scissors"];
  randomInput = Math.floor(Math.random() * choices.length);
  return choices[randomInput];
}
function getHumanChoice() {
  return prompt("Rock, paper, or scissors?");
}
function playRound(humanChoice, computerChoice) {
  humanChoice = humanChoice.toLowerCase();
  const matchups = new Map([
    ["rock,rock", 0],
    ["rock,paper", -1],
    ["rock,scissors", 1],
    ["paper,rock", 1],
    ["paper,paper", 0],
    ["paper,scissors", -1],
    ["scissors,scissors", 0],
    ["scissors,rock", -1],
    ["scissors,paper", 1],
  ]);

  const roundResult = document.createElement("p");
  const results = document.querySelector(".results");
  const playerScoreElement = document.querySelector(".score-player");
  const computerScoreElement = document.querySelector(".score-computer");

  if (matchups.get(`${humanChoice},${computerChoice}`) == 1) {
    humanScore++;

    roundResult.textContent = `You win! ${humanChoice} beats ${computerChoice}`;
    playerScoreElement.textContent = `Player Score: ${humanScore}`;
  } else if (matchups.get(`${humanChoice},${computerChoice}`) == 0) {
    roundResult.textContent = `Tie! Y'all both chose ${humanChoice}`;
  } else {
    computerScore++;
    roundResult.textContent = `You lose! ${computerChoice} beats ${humanChoice}`;
    computerScoreElement.textContent = `Computer Score: ${computerScore}`;
  }
  results.appendChild(roundResult);
  console.log(humanScore);

  if (humanScore == 5 || computerScore == 5) {
    const winner = humanScore == 5 ? "You" : "Computer";

    const announceWinner = document.createElement("p");
    announceWinner.textContent = `${winner} won the game!`;
    results.appendChild(announceWinner);

    document
      .querySelectorAll(".button-rock, .button-paper, .button-scissors")
      .forEach((btn) => (btn.style.display = "none"));
  }
}
function playGame() {
  humanScore = 0;
  computerScore = 0;
  const rockButton = document.querySelector(".button-rock");
  const paperButton = document.querySelector(".button-paper");
  const scissorsButton = document.querySelector(".button-scissors");
  rockButton.addEventListener("click", () =>
    playRound("rock", getComputerChoice())
  );
  paperButton.addEventListener("click", () =>
    playRound("paper", getComputerChoice())
  );
  scissorsButton.addEventListener("click", () =>
    playRound("scissors", getComputerChoice())
  );
}

playGame();
