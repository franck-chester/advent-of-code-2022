const getLines = require('../lib/getLines')
const path = require('path')

//const input = './test.txt';
const input = './input.txt';

function lineParser() {
    return (line) => {
        return line;
    };
};

// Lowercase item types a (97) through z have priorities 1 through 26.
// Uppercase item types A (65) through Z have priorities 27 through 52.
function priority(item) {
    code = item.charCodeAt(0)
    if (code <= 'Z'.charCodeAt(0)) return code - 38
    return code - 96
};

async function main() {
    try {
        const rucksacks = await getLines.processLines(path.resolve(__dirname, input), lineParser());

        const priorities = []
        totalScore = 0;
        for (i = 0; i < rucksacks.length; i++) {
            rucksack = rucksacks[i];
            half = rucksack.length / 2
            compartment1 = rucksack.slice(0, half);
            compartment2 = rucksack.slice(half, rucksack.length);
            shared = []

            for (j = 0; j < half; j++) {
                item = compartment1.charAt(j)
                if (compartment2.includes(item)) {
                    shared.push(item)
                }

            }
            p = priority(shared[0])
            console.log(`rucksack  = ${rucksack}, half = ${half}, shared = ${shared}, priority = ${p}`);
            totalScore += p
        }
        console.log(`total= ${totalScore}`);
    }
    catch (e) {
        console.error(e);
    }
}

main();