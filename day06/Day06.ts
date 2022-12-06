import { Day } from "../lib/Day";

export class Day06 extends Day {
    part1Example(): string {
        return "???"
    }
    part2Example(): string {
        return "???"
    }

    public repeats(entry:string):boolean{
        for(let i = 0; i<entry.length; i++){
            if(entry.substring(0,i).includes(entry.charAt(i)) || entry.substring(i+1,entry.length).includes(entry.charAt(i))) return true;
        }
        return false;
    }

    part1(entries : string[]): string {
        let entry = entries[0];
        let i = 4
        while(this.repeats(entry.substring(i-4,i)) && (i<entry.length -1)){
            i++
        }
        return `${i}`;
    };

    part2(entries : string[]): string {
        let entry = entries[0];
        let i = 14
        while(this.repeats(entry.substring(i-14,i)) && (i<entry.length -1)){
            i++
        }
        return `${i}`;
    };

    // boiler plate

    basePath(): string {
        return __dirname;
    };

}