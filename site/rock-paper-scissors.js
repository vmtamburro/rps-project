class RockPaperScissors {
    numberOfRounds = null;
    countOfComputerWins = 0;
    countOfPlayerWins = 0;
    countOfTies = 0;

    // check if the number of rounds the user entered is valid here
    isNumberOfRoundsValid() {}

    // write the main game loop here
    playGame() {}

    /**
     * play a round of rock paper scissors
     * @param {*} roundNumber
     */
    playRound(roundNumber) {}
    /**
     * prompt the user to get a selection
     * @returns Selections
     */
    getPlayerSelection() {}

    /**
     * tests the selection and determines if it is a valid value
     * @param {*} selection
     * @returns boolean
     */
    isSelectionValid(selection) {}

    /**
     * get a random computer selection
     * @returns Selections
     */
    getComputerSelection() {}

    /**
     * determine the winner of the round
     * @param {*} playerSelection
     * @param {*} computerSelection
     * @returns Outcomes
     */
    determineWinner(playerSelection, computerSelection) {}
}

let unit_test = RockPaperScissors;

function play() {
    const game = new RockPaperScissors();
    game.playGame();
}
