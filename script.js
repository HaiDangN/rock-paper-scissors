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

    if (matchups.get(`${humanChoice},${computerChoice}`) == 1) {
        humanScore++;
        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
    } else if (matchups.get(`${humanChoice},${computerChoice}`) == 0) {
        console.log(`Tie! Y'all both chose ${humanChoice}`);
    } else {
        computerScore++;
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
    }
}
function playGame() {
    humanScore = 0;
    computerScore = 0;
    for (let i = 0; i < 5; i++) {
        playRound(getHumanChoice(), getComputerChoice());
    }
    if (humanScore < computerScore) {
        console.log("You Lose!");
    } else if (humanScore > computerScore) {
        console.log("You win!");
    } else {
        console.log("Tie!");
    }
}

function sumOfTripledEvens(array) {
    return array
        .filter((a) => a % 2 == 0)
        .map((a) => a * 3)
        .reduce((a, b) => a + b, 0);
}

let test = "big-red-ball";
function camelize(str) {
    return str
        .split("-")
        .map((word, index) =>
            index == 0 ? word : word.charAt(0).toUpperCase() + word.slice(1)
        )
        .join("");
}

function unique(arr) {
    let output = [];
    for (const element of arr) {
        if (!output.includes(element)) {
            output.push(element);
        }
    }
    return output;
}

let strings = [
    "Hare",
    "Krishna",
    "Hare",
    "Krishna",
    "Krishna",
    "Krishna",
    "Hare",
    "Hare",
    ":-O",
];

alert(unique(strings)); // Hare, Krishna, :-O
