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

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  function playRound(humanChoice, computerChoice) {
    // your code here!
    let result = "";

    if (humanChoice === computerChoice) {
      result = "DRAW! Same choice.";
    } else if (humanChoice === "rock" && computerChoice === "paper") {
      result = `You lose! Paper beats Rock.`;
      computerScore++;
    } else if (humanChoice === "rock" && computerChoice === "scissors") {
      result = `You win! Rock beats Scissors.`;
      humanScore++;
    } else if (humanChoice === "paper" && computerChoice === "rock") {
      result = `You win! Paper beats Rock.`;
      humanScore++;
    } else if (humanChoice === "paper" && computerChoice === "scissors") {
      result = `You lose! Scissors beat Paper.`;
      computerScore++;
    } else if (humanChoice === "scissors" && computerChoice === "rock") {
      result = `You lose! Rock beats Scissors.`;
      computerScore++;
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
      result = `You win! Scissors beat Paper.`;
      humanScore++;
    }

    const roundResult = document.createElement("p");
    roundResult.innerText = result;
    return roundResult;
  }

  function updateResult(result) {
    resultDiv.appendChild(result);
    scores.innerText = `Player score: ${humanScore}\nComputer score: ${computerScore}`;

    let gameResult = "";
    if (humanScore == 5 || computerScore == 5) {
      if (humanScore > computerScore) {
        gameResult = "You win!";
      } else if (humanScore < computerScore) {
        gameResult = "Computer wins!";
      } else {
        gameResult = "Tie!";
      }

      const finalResult = document.createElement("h3");
      finalResult.innerText = gameResult + "\n==============";
      resultDiv.appendChild(finalResult);
      humanScore = 0;
      computerScore = 0;
    }
  }

  const body = document.body;
  const rockBtn = document.createElement("button");
  const paperBtn = document.createElement("button");
  const scissorsBtn = document.createElement("button");

  const scores = document.createElement("h3");
  scores.innerText = `Player score: ${humanScore}\nComputer score: ${computerScore}`;

  const resultDiv = document.createElement("div");
  const resultTitle = document.createElement("h2");
  resultTitle.innerText = "Results";

  rockBtn.innerText = "ROCK";
  rockBtn.addEventListener("click", () => {
    result = playRound("rock", getComputerChoice());
    updateResult(result);
  });
  paperBtn.innerText = "PAPER";
  paperBtn.addEventListener("click", () => {
    result = playRound("paper", getComputerChoice());
    updateResult(result);
  });
  scissorsBtn.innerText = "SCISSORS";
  scissorsBtn.addEventListener("click", () => {
    result = playRound("scissors", getComputerChoice());
    updateResult(result);
  });

  body.appendChild(rockBtn);
  body.appendChild(paperBtn);
  body.appendChild(scissorsBtn);
  body.appendChild(scores);
  body.appendChild(resultDiv);
  resultDiv.appendChild(resultTitle);
}

playGame();
