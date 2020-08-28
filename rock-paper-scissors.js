// global vars
var numberOfRounds;
var countOfPlayerWins;
var countOfComputerWins;
var countOfTies;

// Enum of Selections
const Selections = {
    ROCK: "rock",
    PAPER: "paper",
    SCISSORS: "scissors",
};
Object.freeze(Selections);

// Enum of Outcomes
const Outcomes = {
    PLAYER_WINS: "player",
    COMPUTER_WINS: "computer",
    TIE: "tie",
};
Object.freeze(Outcomes);

// main entry point
function playGame() {
    // initialize variables for a new game
    numberOfRounds = null;
    countOfPlayerWins = 0;
    countOfComputerWins = 0;
    countOfTies = 0;

    // get the number of rounds
    while (!isNumberOfRoundsValid()) {
        numberOfRounds = +prompt(
            "how many rounds should we play? (must enter an integer greater than zero and no more than 5)",
            "3"
        );
    }

    // play the rounds
    for (let index = 0; index < numberOfRounds; index++) {
        playRound(index + 1);
    }

    // log out the final score
    console.log(
        `final scores: ${countOfPlayerWins} player wins ${countOfComputerWins} computer wins ${countOfTies} ties`
    );
}

/**
 * tests the numberOfRounds global variable and determines if it is a valid value
 * @returns boolean
 */
function isNumberOfRoundsValid() {
    return (
        Number.isInteger(numberOfRounds) &&
        numberOfRounds > 0 &&
        numberOfRounds <= 5
    );
}

/**
 * play a round of rock paper scissors
 * @param {*} roundNumber
 */
function playRound(roundNumber) {
    console.log(`round: ${roundNumber}`);
    if (roundNumber > 1) {
        console.log(
            `score: ${countOfPlayerWins} player wins ${countOfComputerWins} computer wins ${countOfTies} ties`
        );
    }

    var playerSelection = getPlayerSelection();
    var computerSelection = getComputerSelection();
    var outcome = determineWinner(playerSelection, computerSelection);

    console.log(
        `player selected ${playerSelection} and computer selected ${computerSelection}`
    );

    if (outcome === Outcomes.PLAYER_WINS) {
        countOfPlayerWins++;
        console.log("result: player wins");
    } else if (outcome === Outcomes.COMPUTER_WINS) {
        countOfComputerWins++;
        console.log("result: computer wins");
    } else {
        countOfTies++;
        console.log("result: tie");
    }
}

/**
 * prompt the user to get a selection
 * @returns Selections
 */
function getPlayerSelection() {
    var playerSelection;

    while (!isSelectionValid(playerSelection)) {
        playerSelection = prompt(
            "make your selection (must be 'rock', 'paper', or 'scissors')"
        ).toLowerCase();
    }

    return playerSelection;
}

/**
 * tests the selection and determines if it is a valid value
 * @param {*} selection
 * @returns boolean
 */
function isSelectionValid(selection) {
    return (
        selection === Selections.ROCK ||
        selection === Selections.PAPER ||
        selection === Selections.SCISSORS
    );
}

/**
 * get a random computer selection
 * @returns Selections
 */
function getComputerSelection() {
    var randomIndex = Math.floor(Math.random() * 3);

    if (randomIndex === 0) {
        return Selections.ROCK;
    } else if (randomIndex === 1) {
        return Selections.PAPER;
    } else {
        return Selections.SCISSORS;
    }
}

/**
 * determine the winner of the round
 * @param {*} playerSelection
 * @param {*} computerSelection
 * @returns Outcomes
 */
function determineWinner(playerSelection, computerSelection) {
    // handle ties first
    if (playerSelection === computerSelection) {
        return Outcomes.TIE;
    }

    if (playerSelection === Selections.ROCK) {
        if (computerSelection === Selections.PAPER) {
            return Outcomes.COMPUTER_WINS;
        } else {
            return Outcomes.PLAYER_WINS;
        }
    }

    if (playerSelection === Selections.PAPER) {
        if (computerSelection === Selections.SCISSORS) {
            return Outcomes.COMPUTER_WINS;
        } else {
            return Outcomes.PLAYER_WINS;
        }
    }

    if (playerSelection === Selections.SCISSORS) {
        if (computerSelection === Selections.ROCK) {
            return Outcomes.COMPUTER_WINS;
        } else {
            return Outcomes.PLAYER_WINS;
        }
    }
}
