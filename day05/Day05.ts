import { Day } from "../lib/Day";

export class Day05 extends Day {
    part1Example(): string {
        return "CMZ"
    }
    part2Example(): string {
        return "???"
    }

    part1(entries : string[]): string {
        let solution = "????"
        let mode : "crateProcessing"|"moveProcessing" = "crateProcessing";
        const regexCrates = /(\[\w\]|\s{3})\s?/gm;
            const regexMoves = /move (\d{1,2}) from (\d) to (\d)/gm;

        let stacks : string[][] = [[],[],[],[],[],[],[],[],[]];
        for (let i = 0; i < entries.length; i++) {
            let entry = entries[i];

            if(entry.startsWith(" 1")){

                this.logStacks(stacks);
                
                i+=2;
                entry = entries[i];
                mode = "moveProcessing" ;
                console.log(`MODE : ${mode}`);
                
            }

            if(mode == "crateProcessing"){
             
                let matches = entry.match(regexCrates);
                console.log(`REGEX MATCH : ${matches}`);
                let crates = matches!.map(m => m.charAt(1));
                for(let s = 0; s< stacks.length; s++){
                    
                    if(crates[s] != ' '){
                        console.log(`add : ${crates[s]} to stack ${s}`);
                        stacks[s].unshift(crates[s]);
                    }
                    else{
                        console.log(`no crate on stack ${s}`);
                    }
                }

            }

            if(mode == "moveProcessing"){
                
                // I have no idea what I am doing here
                let matches = Array.from(entry.matchAll(regexMoves), (m) => [m[1],m[2],m[3]]);
                //console.log(`${entry} -- REGEX MATCH : ${matches}`);
                let moveCount = parseInt(matches[0][0]);
                let moveFrom = parseInt(matches[0][1])-1;
                let moveTo = parseInt(matches[0][2])-1;

                console.log(`REGEX MATCH : ${matches} : move ${moveCount} from ${moveFrom} to ${moveTo}`);

                for(let j = 0; j<moveCount; j++){
                    let crate = stacks[moveFrom].pop();
                    if(crate){
                        stacks[moveTo].push(crate);
                    }
                }
                this.logStacks(stacks);
                
            }
            
        }
        let sol : string[] = [];
        for (let s = 0; s < stacks.length; s++) {
            let c = stacks[s].pop();
            if(c) sol.push(c);
        }
        console.log(`solution = ${sol}`);
        return `${sol.join('')}`;
    };

    private logStacks(stacks: string[][]) {
        for (let s = 0; s < stacks.length; s++) {
            console.log(`${s} ${stacks[s].join('|')}`);
        }
    }

    part2(entries : string[]): string {
        let solution = "????"
        for (let i = 0; i < entries.length; i++) {
            console.log(`entry = ${entries[i]}`);
        }
        return `${solution}`;
    };

    // boiler plate

    basePath(): string {
        return __dirname;
    };

}