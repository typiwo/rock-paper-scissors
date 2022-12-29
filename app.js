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

    // Compare computerChoice to playerChoice
    if (playerChoice == "ROCK" && computerChoice == "ROCK") {
        console.log("It's a tie! (ROCK vs. ROCK)");
        return 0;
    }
    else if (playerChoice == "ROCK" && computerChoice == "PAPER") {
        console.log("You lose! PAPER beats ROCK!");
        return -1;
    }
    else if (playerChoice == "ROCK" && computerChoice == "SCISSORS") {
        console.log("You win! ROCK beats SCISSORS!");
        return 1;
    }
    else if (playerChoice == "PAPER" && computerChoice == "ROCK") {
        console.log("You win! PAPER beats ROCK!");
        return 1;
    }
    else if (playerChoice == "PAPER" && computerChoice == "PAPER") {
        console.log("It's a tie! (PAPER vs. PAPER)");
        return 0;
    }
    else if (playerChoice == "PAPER" && computerChoice == "SCISSORS") {
        console.log("You lose! SCISSORS beats PAPER!");
        return -1;
    }
    else if (playerChoice == "SCISSORS" && computerChoice == "ROCK") {
        console.log("You lose! ROCK beats SCISSORS!");
        return -1;
    }
    else if (playerChoice == "SCISSORS" && computerChoice == "PAPER") {
        console.log("You win! SCISSORS beats PAPER!");
        return 1;
    }
    else if (playerChoice == "SCISSORS" && computerChoice == "SCISSORS") {
        console.log("It's a tie! (SCISSORS vs. SCISSORS)");
        return 0;
    }
    else {
        console.log("ERROR");
        return null;
    }
}

// Create function that:
//  1. Plays 5 rounds
//  2. Keeps score
//  3. Reports winner/loser at the end
function game() {
    // Initialize score variable
    let score = 0;

    // Iterate 5 times
    for (let i = 0; i < 5; i++) {
        // Get player choice
        let userInput = prompt("Choose ROCK, PAPER, or SCISSORS");

        // Play round, determine winner (1 = win, 0 = tie, -1 = loss)
        let roundResult = playRound(userInput);

        // Update score
        score += roundResult;
    }

    // Determine if player wins, loses, or ties based on score
    if (score > 0) {
        console.log("You won the game!");
    }
    else if (score < 0) {
        console.log("You lost the game!")
    }
    else {
        console.log("It's a tie!")
    }
}

game()




