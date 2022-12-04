const getLines = require('../lib/getLines')
const path = require('path')

const input = './test.txt';
//const input = './input.txt';


function lineParser() {
    return (line) => {
        return line; // TODO implement parser
    };
};

async function main() {
    try {
        const entries = await getLines.processLines(path.resolve(__dirname, input), lineParser());     
        
        totalScore = 0;
        for (i = 0; i < entries.length; i++) {
            entry = entries[i]
            pairs = entry.split(',')
            p1 = pairs[0].split('-');
            p2 = pairs[1].split('-');
            overlap = overlaps(p1, p2); 
            totalScore += overlap? 1 : 0;
            if(overlap) console.log(`entry= ${entry}, p1 = ${p1}, p2 = ${p2}, overlap = ${overlap} , includes (${p1},${p2}) = ${includes (p1,p2)} includes (${p2},${p1}) = ${includes (p2,p1)} `);
        }
        console.log(`total= ${totalScore}`);
        
        console.log(`main(): ${JSON.stringify(finalState)}`);
    }
    catch (e) {
        console.error(e);
    }
}

main();