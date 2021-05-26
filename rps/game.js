class Game{
    numberOfRounds = null;
    countOfPlayerWins = 0;
    countOfComputerWins = 0;
    countOfTies = 0;

    incrementPlayerWins(){
        this.countOfPlayerWins++;
    }

    incrementComputerWins(){
        this.countOfComputerWins++;
    }

    incrementCountOfTies(){
        this.countOfTies++;
    }


    setNumberOfRounds(numberOfRounds){
        this.numberOfRounds = numberOfRounds;
    }

    newGame(){
        this.numberOfRounds = null;
        this.countOfPlayerWins = 0;
        this.countOfComputerWins = 0;
        this.countOfTies = 0;
    }

     /**
     * tests the numberOfRounds global variable and determines if it is a valid value
     * @returns boolean
     */
     isNumberOfRoundsValid(num) {
        return (
            Number.isInteger(num) &&
            num > 0 &&
            num <= 5
        );
    }
}


let unit_test  = Game;