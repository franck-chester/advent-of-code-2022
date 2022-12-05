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
        let stacks : string[][] = [[]];
        for (let i = 0; i < entries.length; i++) {
            let entry = entries[i];

            if(entry.startsWith(" 1")){
                stacks.splice(0,1) ; // have an empty row in there
                for(let s=0; s< stacks.length; s++){
                    console.log(` ${stacks[s].join(' ')}`);
                }
                console.log(entries[i].split('   ').join(' '));
                i+=2;
                entry = entries[i];
                mode = "moveProcessing" ;
                console.log(`MODE : ${mode}`);

                
            }

            const regex = /(\[\w\]|\s{3})/gm;
            if(mode == "crateProcessing"){
             
                let matches = entry.match(regex);
                console.log(`REGEX MATCH : ${matches}`);
                let crates = matches!.map(m => m.charAt(1));
                
                stacks.push(crates);
            }
            
        }
        return `${solution}`;
    };

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