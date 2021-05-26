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


class Round{
    playerSelection;
    computerSelection;

    constructor(playerSelection){
        this.playerSelection = playerSelection;
        this.computerSelection = this.getComputerSelection();
    }

    /**
     * get a random computer selection
     * @returns Selections
     */
    getComputerSelection() {
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
    determineWinner() {
        // handle ties first
        if (this.playerSelection === this.computerSelection) {
            return Outcomes.TIE;
        }

        if (this.playerSelection === Selections.ROCK) {
            if (this.computerSelection === Selections.PAPER) {
                return Outcomes.COMPUTER_WINS;
            } else {
                return Outcomes.PLAYER_WINS;
            }
        }

        if (this.playerSelection === Selections.PAPER) {
            if (this.computerSelection === Selections.SCISSORS) {
                return Outcomes.COMPUTER_WINS;
            } else {
                return Outcomes.PLAYER_WINS;
            }
        }

        if (this.playerSelection === Selections.SCISSORS) {
            if (this.computerSelection === Selections.ROCK) {
                return Outcomes.COMPUTER_WINS;
            } else {
                return Outcomes.PLAYER_WINS;
            }
        }
    }



}


//DO NOT TOUCH THIS LINE OF CODE//
let unit_test = Round;