import * as fs from 'fs';
import * as path from 'path';
import * as readline from 'readline';

export abstract class Day {
    day: string;
    entries: string[] = [];
    isTest: boolean;

    abstract part1Example() : string;
    abstract part2Example() : string;

    constructor(isTest: boolean = true) {
        this.day = this.constructor.name;
        this.isTest = isTest;

    }

    async readEntries() {
        this.entries = await this.processLines(
            path.resolve(this.basePath(), this.isTest ? `${this.basePath()}/${this.testFile()}` : `${this.basePath()}/input.txt`),
            this.lineParser());
    }
    testFile() {
        return 'test.txt'
    }

    abstract basePath(): string;

    lineParser(): (line: string) => string {
        return (line: string): string => {
            return line;
        };
    };

    part1(entries : string[]): string {

        return `${this.day} - Part 1 hasn't been implemented yet - ${entries.length} entries}`
    };
    part2(entries : string[]): string {
        return `${this.day} - Part 2 hasn't been implemented yet - ${entries.length} entries}`
    };


    async processLines(inputFile: string, processor: (line: string) => string) {
        console.log(`${this.day} - ${this.isTest ? " vvvvvvvvvvvvvv TEST INPUT vvvvvvvvvvvvvvv" : " vvvvvvvvvvvv REAL INPUT  vvvvvvvvvvvvvvvvv"}`);
        const rl = readline.createInterface({
            input: fs.createReadStream(inputFile),
            crlfDelay: Infinity
        });

        const processedLines = [];
        for await (const line of rl) {
            console.log(line);
            processedLines.push(processor(line));
        }
        console.log(`${this.day} - ${this.isTest ? " ^^^^^^^^^^^^^^^^^ TEST INPUT ^^^^^^^^^^^^^^^" : " ^^^^^^^^^^^^^^ REAL INPUT ^^^^^^^^^^^^^"}`);
        console.log(`${this.day} - ${this.isTest ? "TEST INPUT" : "ACTUAL INPUT"} processLines(): ${processedLines.length} LINES PROCESSED`);
        return processedLines;
    }

    parseEntry(entry: string, regex : RegExp):Record<string,string>{
        let match = regex.exec(entry);
         return {};
    }
    

}