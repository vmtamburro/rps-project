var sinon = require("sinon");
var rewire = require("rewire");
const { expect } = require("chai");

let RockPaperScissors = rewire("../site/rock-paper-scissors.js").__get__(
    "unit_test"
);

describe("RockPaperScissors Test Suite", () => {
    let rps;
    let rpsMock;

    beforeEach(() => {
        rps = new RockPaperScissors();
        rpsMock = sinon.mock(rps);
    });

    describe("isNumberOfRoundsValid", () => {
        const maxRounds = 5;
        const minRounds = 1;

        it("should be true for number in range", () => {
            rps.numberOfRounds = 3;

            const isValid = rps.isNumberOfRoundsValid();

            expect(isValid).to.be.true;
        });

        it("should be false for non number", () => {
            rps.numberOfRounds = "random";

            const isValid = rps.isNumberOfRoundsValid();

            expect(isValid).to.be.false;
        });

        it("should be false for less than minimum", () => {
            rps.numberOfRounds = minRounds - 1;

            const isValid = rps.isNumberOfRoundsValid();

            expect(isValid).to.be.false;
        });

        it("should be false for more than maximum", () => {
            rps.numberOfRounds = maxRounds + 1;

            const isValid = rps.isNumberOfRoundsValid();

            expect(isValid).to.be.false;
        });
    });

    describe("playGame", () => {
        let numRounds = 3;
        let selection = "rock";

        beforeEach(() => {
            global.prompt = (msg) => {
                if (msg.includes("selection")) {
                    return selection;
                }
                if (msg.includes("rounds")) {
                    return `${numRounds}`;
                }
            };
        });

        it("should set num rounds from prompt", () => {
            rps.playGame();

            expect(rps.numberOfRounds).to.equal(numRounds);
        });
    });
});
