var game = new Game();
// main entry point
function playGame() {

    // reset the game
    game.newGame();

    var isValid = false;
    // get the number of rounds
    while (!isValid) {
        var numberOfRounds = +prompt(
            "how many rounds should we play? (must enter an integer greater than zero and no more than 5)",
            "3"
        );

        if(game.isNumberOfRoundsValid(numberOfRounds)){
            game.setNumberOfRounds(numberOfRounds);
            isValid = true;
        }
    }

    // play the rounds
    for (let index = 0; index < numberOfRounds; index++) {
        playRound(index + 1);
    }

    // log out the final score
    console.log(
        `final scores: ${game.countOfPlayerWins} player wins ${game.countOfComputerWins} computer wins ${game.countOfTies} ties`
    );
}

/**
 * play a round of rock paper scissors
 * @param {*} roundNumber
 */
function playRound(roundNumber) {

    //Display Current Round Info
    console.log(`round: ${roundNumber}`);
    if (roundNumber > 1) {
        console.log(
            `score: ${game.countOfPlayerWins} player wins ${game.countOfComputerWins} computer wins ${game.countOfTies} ties`
        );
    }

    //Prompt for Player Selection
    var playerSelection = getPlayerSelection();
    var round = new Round(playerSelection);

    //Play the Round
    var outcome = round.determineWinner();

    //Log the Results
    console.log(
        `player selected ${round.playerSelection} and computer selected ${round.computerSelection}`
    );

    if (outcome === Outcomes.PLAYER_WINS) {
        game.incrementPlayerWins();
        console.log("result: player wins");
    } else if (outcome === Outcomes.COMPUTER_WINS) {
        game.incrementComputerWins();
        console.log("result: computer wins");
    } else {
        game.incrementCountOfTies();
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