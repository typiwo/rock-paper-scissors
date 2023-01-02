// Load our buttons into JS
const rockButton = document.querySelector('#rock');
const paperButton = document.querySelector('#paper');
const scissorsButton = document.querySelector('#scissors');

// Add event listeners to the buttons that will play a round when clicked
rockButton.addEventListener('click', () => playRound('rock'));
paperButton.addEventListener('click',() => playRound('paper'));
scissorsButton.addEventListener('click', () => playRound('scissors'));

// Load our results div
const resultsDiv = document.querySelector('.results');

// Load our game score div
const scoreDiv = document.querySelector('.score');
const playerScoreDiv = document.querySelector('#playerScore');
const computerScoreDiv = document.querySelector('#computerScore');

// Create variables to store player and computer score (will need to reset these when one reaches 5)
let playerScore = 0;
let computerScore = 0;




// Create function that randomly returns 'Rock', 'Paper', or 'Scissors'.
function getComputerChoice() {
    // Create list of possible choices
    let choices = ['Rock', 'Paper', 'Scissors'];

    // Randomly select index (0, 1, 2)
    let randomIdx = Math.floor(Math.random() * choices.length);

    // Obtain the random choice
    let randomChoice = choices[randomIdx];

    return randomChoice;

}


// Create function that let's us play against the computer
function playRound(playerChoice) {
    // Convert playerChoice to all uppercase for easy comparisons
    playerChoice = playerChoice.toUpperCase();

    // Obtain computer choice and convert to uppercase for easy comparisons
    let computerChoice = getComputerChoice().toUpperCase();

    // Check if either player has reached maximum score, reset scores
    if (playerScore == 5) {
        playerScore = 0;
        computerScore = 0;
    }
    else if (computerScore == 5) {
        playerScore = 0;
        computerScore = 0;
    }


    // Compare computerChoice to playerChoice
    if (playerChoice == "ROCK" && computerChoice == "ROCK") {
        resultsDiv.textContent = "It's a tie! (ROCK vs. ROCK)";
        playerScoreDiv.textContent = playerScore;
        computerScoreDiv.textContent = computerScore;
    }
    else if (playerChoice == "ROCK" && computerChoice == "PAPER") {
        resultsDiv.textContent = "You lose! PAPER beats ROCK!";
        computerScore += 1;
        playerScoreDiv.textContent = playerScore;
        computerScoreDiv.textContent = computerScore;
        checkForWinner(playerScore, computerScore);
    }
    else if (playerChoice == "ROCK" && computerChoice == "SCISSORS") {
        resultsDiv.textContent = "You win! ROCK beats SCISSORS!";
        playerScore += 1;
        playerScoreDiv.textContent = playerScore;
        computerScoreDiv.textContent = computerScore;
        checkForWinner(playerScore, computerScore);
    }
    else if (playerChoice == "PAPER" && computerChoice == "ROCK") {
        resultsDiv.textContent = "You win! PAPER beats ROCK!";
        playerScore += 1;
        playerScoreDiv.textContent = playerScore;
        computerScoreDiv.textContent = computerScore;
        checkForWinner(playerScore, computerScore);
    }
    else if (playerChoice == "PAPER" && computerChoice == "PAPER") {
        resultsDiv.textContent = "It's a tie! (PAPER vs. PAPER)";
        playerScoreDiv.textContent = playerScore;
        computerScoreDiv.textContent = computerScore;
    }
    else if (playerChoice == "PAPER" && computerChoice == "SCISSORS") {
        resultsDiv.textContent = "You lose! SCISSORS beats PAPER!";
        computerScore += 1;
        playerScoreDiv.textContent = playerScore;
        computerScoreDiv.textContent = computerScore;
        checkForWinner(playerScore, computerScore);
    }
    else if (playerChoice == "SCISSORS" && computerChoice == "ROCK") {
        resultsDiv.textContent = "You lose! ROCK beats SCISSORS!";
        computerScore += 1;
        playerScoreDiv.textContent = playerScore;
        computerScoreDiv.textContent = computerScore;
        checkForWinner(playerScore, computerScore);
    }
    else if (playerChoice == "SCISSORS" && computerChoice == "PAPER") {
        resultsDiv.textContent = "You win! SCISSORS beats PAPER!";
        playerScore += 1;
        playerScoreDiv.textContent = playerScore;
        computerScoreDiv.textContent = computerScore;
        checkForWinner(playerScore, computerScore);
    }
    else if (playerChoice == "SCISSORS" && computerChoice == "SCISSORS") {
        resultsDiv.textContent = "It's a tie! (SCISSORS vs. SCISSORS)";
        playerScoreDiv.textContent = playerScore;
        computerScoreDiv.textContent = computerScore;
    }
    else {
        resultsDiv.textContent = "ERROR";
        scoreDiv.textContent = "ERROR";
        return null;
    }
}

// Function to check if player or computer has reached 5 points yet
function checkForWinner(playerScore, computerScore) {
    if (playerScore == 5) {
        resultsDiv.textContent = "CONGRATULATIONS! You won the game! :)";
    }
    else if (computerScore == 5) {
        resultsDiv.textContent = "Sorry, you lost! :(";
    }
} 
