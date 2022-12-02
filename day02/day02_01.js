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




async function main() {
    try {
        const entries = await getLines.processLines(path.resolve(__dirname, input), lineParser());     
 
        const scores = []
        totalScore = 0;
        for(i=0; i<entries.length; i++){
            round = entries[i];
            plays = round.split(' ');
            outcome = scoring[round];
            score = scoring[plays[1]] + outcome
            console.log(`entry = ${entries[i]}, round = ${round}, them : ${plays[0]}, you : ${plays[1]}, score = ${scoring[plays[1]]} + ${outcome} =  ${score}`);
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