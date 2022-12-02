const getLines = require('../lib/getLines')
const path = require('path')

//const input = './test.txt';
const input = './input.txt';

function lineParser() {
    return (line) => {
        return line; 
    };
};

function entryProcessor(previousState, entry) {
    console.log(`entryProcessor(${JSON.stringify(previousState)}, ${JSON.stringify(entry)})...`);
    const newState = {};

    console.log(`entryProcessor(${JSON.stringify(previousState)}, ${JSON.stringify(entry)}) gives\n${JSON.stringify(newState)}`);
    return newState;
};

// Rock defeats Scissors, Scissors defeats Paper, and Paper defeats Rock. 
// 0 if you lost, 3 if the round was a draw, and 6 if you won
const scoring= {
    A : 1, // R
    B : 2, // P
    C: 3,  // S
    X: 1,  // R
    Y: 2,  // P
    Z:3,   // S
    "A X": 3, // D
    "A Y": 6, // W
    "A Z": 0, // L

    "B X": 0, // L
    "B Y": 3, // D
    "B Z": 6, // W

    "C X": 6, // W
    "C Y": 0, // L
    "C Z": 3, // D
}

// X means you need to lose, Y means you need to end the round in a draw, and Z means you need to win
const strategy= {
    "A X": "A Z", // L
    "A Y": "A X", // D
    "A Z": "A Y",  // W

    "B X": "B X", // L
    "B Y": "B Y", // D
    "B Z": "B Z", // W

    "C X": "C Y", // L
    "C Y": "C Z", // D
    "C Z": "C X", // W
}


async function main() {
    try {
        const entries = await getLines.processLines(path.resolve(__dirname, input), lineParser());     
 
        const scores = []
        totalScore = 0;
        for(i=0; i<entries.length; i++){
            round = entries[i];
            plays = strategy[round].split(' ');
            outcome = scoring[strategy[round]];
            score = scoring[plays[1]] + outcome
            console.log(`entry = ${entries[i]}, round = ${plays}, them : ${plays[0]}, you : ${plays[1]}, score = ${scoring[plays[1]]} + ${outcome} =  ${score}`);
            scores.push(score)
            totalScore+= score
            
        }
        console.log(`total= ${totalScore}`);
    }
    catch (e) {
        console.error(e);
    }
}

main();