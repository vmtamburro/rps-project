
var sinon = require('sinon');
var rewire = require('rewire');
const { expect, assert } = require('chai');

let Round = rewire('../rps/round.js').__get__('unit_test');
let Game =  rewire('../rps/game.js').__get__('unit_test');


describe('RPS Test Suite', () =>{
    describe('Determine Winner', function(){
        it("Paper Beats Rock, computer wins", function(){
            //Arrange
            var round = new Round("rock");
            round.computerSelection = "paper";
            round.playerSelection = "rock";

            //Invoke
            var result = (round.determineWinner());

            
            //Assert
           expect(result).to.equal("computer");
        })
    })
});

describe('RPS Test Suite', () =>{
    describe('Determine Winner', function(){
        it("Paper Beats Rock, player wins", function(){
            //Arrange
            var round = new Round("rock");
            round.computerSelection = "rock";
            round.playerSelection = "paper";

            //Invoke
            var result = (round.determineWinner());

            
            //Assert
           expect(result).to.equal("player");
        })
    })
});

describe('RPS Test Suite', () =>{
    describe('Determine Winner', function(){
        it("Scissors beats Paper, computer wins", function(){
            //Arrange
            var round = new Round("rock");
            round.computerSelection = "scissors";
            round.playerSelection = "paper";

            //Invoke
            var result = (round.determineWinner());

            
            //Assert
           expect(result).to.equal("computer");
        })
    })
});

describe('RPS Test Suite', () =>{
    describe('Determine Winner', function(){
        it("Scissors beats Paper, computer wins", function(){
            //Arrange
            var round = new Round("rock");
            round.computerSelection = "paper";
            round.playerSelection = "scissors";

            //Invoke
            var result = (round.determineWinner());

            
            //Assert
            expect(result).to.equal("player");
        })
    })
});

describe('RPS Test Suite', () =>{
    describe('Determine Winner', function(){
        it("Rock beats Scissors, computer wins", function(){
            //Arrange
            var round = new Round("rock");
            round.computerSelection = "rock";
            round.playerSelection = "scissors";

            //Invoke
            var result = (round.determineWinner());

            
            //Assert
            expect(result).to.equal("computer");
        })
    })
});


describe('RPS Test Suite', () =>{
    describe('Determine Winner', function(){
        it("Rock beats Scissors, player wins", function(){
            //Arrange
            var round = new Round("rock");
            round.computerSelection = "scissors";
            round.playerSelection = "rock";

            //Invoke
            var result = (round.determineWinner());

            
            //Assert
            expect(result).to.equal("player");
        })
    })
});


describe('RPS Test Suite', () =>{
    describe('Validate Rounds', function(){
        it("User Inputs 3, Is Valid", function(){
            //Arrange
            var game = new Game();

            //Invoke
            var result = game.isNumberOfRoundsValid(3);

            
            //Assert
            expect(result).to.be.true;
        })
    })
});


describe('RPS Test Suite', () =>{
    describe('Validate Rounds', function(){
        it("User Inputs 5, Is Valid", function(){
            //Arrange
            var game = new Game();

            //Invoke
            var result = game.isNumberOfRoundsValid(5);

            
            //Assert
            expect(result).to.be.true;
        })
    })
});

describe('RPS Test Suite', () =>{
    describe('Validate Rounds', function(){
        it("User Inputs 0, Is Invalid", function(){
            //Arrange
            var game = new Game();

            //Invoke
            var result = game.isNumberOfRoundsValid(0);

            
            //Assert
            expect(result).to.be.false;
        })
    })
});

describe('RPS Test Suite', () =>{
    describe('Validate Rounds', function(){
        it("User Inputs 10, Is Invalid", function(){
            //Arrange
            var game = new Game();

            //Invoke
            var result = game.isNumberOfRoundsValid(10);

            
            //Assert
            expect(result).to.be.false;
        })
    })
});



describe('RPS Test Suite', () =>{
    describe('NewGame', function(){
        it("Refreshes Game after Increment", function(){
            //Arrange
            var game = new Game();
            game.newGame();
            game.setNumberOfRounds(5);
            game.incrementCountOfTies();
            expect(game.countOfTies).to.equal(1);
            game.incrementComputerWins();
            expect(game.countOfComputerWins).to.equal(1);
            game.incrementPlayerWins();
            expect(game.countOfPlayerWins).to.equal(1);

            //Invoke 
            game.newGame();
            
            //Assert
            expect(game.countOfPlayerWins).to.equal(0);
            expect(game.countOfComputerWins).to.equal(0);
            expect(game.countOfTies).to.equal(0);
        })
    })
});


describe('RPS Test Suite', () =>{
    describe('NewGame', function(){
        it("Increments Player Wins", function(){
            //Arrange
            var game = new Game();
            game.newGame();
            expect(game.countOfPlayerWins).to.equal(0);

            //Invoke 
            game.incrementPlayerWins();

            //Assert
            expect(game.countOfPlayerWins).to.equal(1);
        })
    })
});

describe('RPS Test Suite', () =>{
    describe('NewGame', function(){
        it("Increments Computer Wins", function(){
            //Arrange
            var game = new Game();
            game.newGame();
            expect(game.countOfComputerWins).to.equal(0);

            //Invoke 
            game.incrementComputerWins();

            //Assert
            expect(game.countOfComputerWins).to.equal(1);
        })
    })
});


describe('RPS Test Suite', () =>{
    describe('NewGame', function(){
        it("Increments Tie Counts", function(){
            //Arrange
            var game = new Game();
            game.newGame();
            expect(game.countOfTies).to.equal(0);

            //Invoke 
            game.incrementCountOfTies();

            //Assert
            expect(game.countOfTies).to.equal(1);
        })
    })
});

