const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// A simple utility to ask questions using Promises (Async/Await)
const ask = (query) => new Promise((resolve) => rl.question(query, resolve));

async function playGame() {
    console.log("=== Welcome to the Guess the Number Game! ===");
    console.log("I'm thinking of a number between 1 and 100.");

    const target = Math.floor(Math.random() * 100) + 1;
    let attempts = 0;
    let guessedCorrectly = false;

    while (!guessedCorrectly) {
        const input = await ask("Enter your guess: ");
        const guess = parseInt(input);
        attempts++;

        if (isNaN(guess)) {
            console.log("Please enter a valid number.");
            continue;
        }

        if (guess === target) {
            console.log(`🎉 Correct! You guessed it in ${attempts} attempts.`);
            guessedCorrectly = true;
        } else if (guess < target) {
            console.log("Too low! Try again.");
        } else {
            console.log("Too high! Try again.");
        }
    }

    rl.close();
}

playGame();
