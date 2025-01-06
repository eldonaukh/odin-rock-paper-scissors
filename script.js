function getComputerChoice() {
  let choice = Math.floor(Math.random() * 3 + 1);

  switch (choice) {
    case 1:
      return "rock";
    case 2:
      return "paper";
    case 3:
      return "scissors";
  }
}

function getHumanChoice() {
  let choice = prompt("Please input your choice (rock / paper / scissors): ")
    .toLowerCase()
    .trim();

  switch (choice) {
    case "rock":
      return "rock";
    case "paper":
      return "paper";
    case "scissors":
      return "scissors";
  }
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  function playRound(humanChoice, computerChoice) {
    // your code here!
    if (humanChoice === computerChoice) {
      console.log("DRAW! Same choice.");
    } else if (humanChoice === "rock" && computerChoice === "paper") {
      console.log(`You lose! Paper beats Rock.`);
      computerScore++;
    } else if (humanChoice === "rock" && computerChoice === "scissors") {
      console.log(`You win! Rock beats Scissors.`);
      humanScore++;
    } else if (humanChoice === "paper" && computerChoice === "rock") {
      console.log(`You win! Paper beats Rock.`);
      humanScore++;
    } else if (humanChoice === "paper" && computerChoice === "scissors") {
      console.log(`You lose! Scissors beat Paper.`);
      computerScore++;
    } else if (humanChoice === "scissors" && computerChoice === "rock") {
      console.log(`You lose! Rock beats Scissors.`);
      computerScore++;
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
      console.log(`You win! Scissors beat Paper.`);
      humanScore++;
    }
  }

  for (let i = 0; i < 5; i++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();

    playRound(humanSelection, computerSelection);
  }

  if (humanScore > computerScore) {
    console.log("You win!");
  } else if (humanScore < computerScore) {
    console.log("Compue wins!");
  } else {
    console.log("Tie!");
  }
  console.log(`Player score: ${humanScore}`);
  console.log(`Computer score: ${computerScore}`);
}

playGame();