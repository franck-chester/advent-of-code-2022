const getLines = require('../lib/getLines')
const path = require('path')

//const input = './test.txt';
const input = './input.txt';

let entries = getLines.getTextLines(path.resolve(__dirname, input)); 
console.log(`Entries : ${entries.length}`);
//let entries = getLines.getTextLines(path.resolve(__dirname, input)); 

const elvesCalories = [0];
let solution = 0;
let elf = 0;
for(i=0; i<entries.length; i++){
    console.log(`entry = ${entries[i]}`);
    if(entries[i].length > 0){
        elvesCalories[elf]+= parseInt(entries[i]);
        console.log(`elf = ${elf}, elvesCalories[elf] = ${elvesCalories[elf]}`);
    }
    else{
        elvesCalories.push(0);
        elf++;
        console.log(`elf = ${elf}`);
    }
}
solution = Math.max(...elvesCalories);
console.log(`Solution : ${solution}`);