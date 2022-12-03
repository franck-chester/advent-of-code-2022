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
        g = 0

        for (i = 0; i < rucksacks.length; i+=3) {
            group = [rucksacks[i], rucksacks[i+1], rucksacks[i+2]]
            group.sort((a,b) => b.length - a.length)
            
            shared = []

            for (j = 0; j < group[0].length; j++) {
                item = group[0].charAt(j)
                if (group[1].includes(item) && group[2].includes(item) ) {
                    shared.push(item)
                }

            }
            p = priority(shared[0])
            console.log(`i : ${i} group (sorted)  = ${group}, shared = ${shared}, priority = ${p}`);
            totalScore += p
        }
        console.log(`total= ${totalScore}`);
    }
    catch (e) {
        console.error(e);
    }
}

main();