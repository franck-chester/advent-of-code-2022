const getLines = require('../lib/getLines')
const path = require('path')

//const input = './test.txt';
const input = './input.txt';

function lineParser() {
    return (line) => {
        return line; 
    };
};

async function main() {
    try {
        const entries = await getLines.processLines(path.resolve(__dirname, input), lineParser());     
 
        const scores = []
        totalScore = 0;
        for(i=0; i<entries.length; i++){
            console.log(`entry = ${entries[i]},`);

            
        }
        console.log(`total= ${totalScore}`);
    }
    catch (e) {
        console.error(e);
    }
}

main();