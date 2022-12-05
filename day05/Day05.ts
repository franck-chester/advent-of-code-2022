import { Day } from "../lib/Day";

export class Day05 extends Day {
    part1Example(): string {
        return "CMZ"
    }
    part2Example(): string {
        return "MCD"
    }

    part1(entries: string[]): string {
        let mode: "crateProcessing" | "moveProcessing" = "crateProcessing";
        let stacks: string[][] = [[], [], [], [], [], [], [], [], []];
        for (let i = 0; i < entries.length; i++) {
            let entry = entries[i];

            if (entry.startsWith(" 1")) {
                this.logStacks(stacks);

                i += 2;
                entry = entries[i];
                mode = "moveProcessing";
                console.log(`MODE : ${mode}`);
            }

            if (mode == "crateProcessing") {
                this.parseCrates(entry, stacks);
            }

            if (mode == "moveProcessing") {
                let instructions = this.parseInstructions(entry);

                for (let j = 0; j < instructions.moveCount; j++) {
                    let crate = stacks[instructions.moveFrom].pop();
                    if (crate) {
                        stacks[instructions.moveTo].push(crate);
                    }
                }
                this.logStacks(stacks);
            }

        }
        let sol: string[] = [];
        for (let s = 0; s < stacks.length; s++) {
            let c = stacks[s].pop();
            if (c) sol.push(c);
        }
        console.log(`solution = ${sol}`);
        return `${sol.join('')}`;
    };


    part2(entries: string[]): string {
        let mode: "crateProcessing" | "moveProcessing" = "crateProcessing";
        let stacks: string[][] = [[], [], [], [], [], [], [], [], []];
        for (let i = 0; i < entries.length; i++) {
            let entry = entries[i];

            if (entry.startsWith(" 1")) {

                this.logStacks(stacks);

                i += 2;
                entry = entries[i];
                mode = "moveProcessing";
                console.log(`MODE : ${mode}`);
            }

            if (mode == "crateProcessing") {
                this.parseCrates(entry, stacks);
            }

            if (mode == "moveProcessing") {
                let instructions = this.parseInstructions(entry);

                let crates = stacks[instructions.moveFrom].splice(stacks[instructions.moveFrom].length - instructions.moveCount, instructions.moveCount);
                stacks[instructions.moveTo].push(...crates);

                this.logStacks(stacks);
            }

        }
        let sol: string[] = [];
        for (let s = 0; s < stacks.length; s++) {
            let c = stacks[s].pop();
            if (c) sol.push(c);
        }
        console.log(`solution = ${sol}`);
        return `${sol.join('')}`;
    };

    private logStacks(stacks: string[][]) {
        for (let s = 0; s < stacks.length; s++) {
            console.log(`${s} ${stacks[s].join('|')}`);
        }
    }

    private parseCrates(entry: string, stacks: string[][]): string[][] {
        const regexCrates = /(\[\w\]|\s{3})\s?/gm;
        let matches = entry.match(regexCrates);
        console.log(`REGEX MATCH : ${matches}`);
        let crates = matches!.map(m => m.charAt(1));
        for (let s = 0; s < stacks.length; s++) {

            if (crates[s] != ' ') {
                console.log(`add : ${crates[s]} to stack ${s}`);
                stacks[s].unshift(crates[s]);
            }
            else {
                console.log(`no crate on stack ${s}`);
            }
        }
        return stacks;
    }

    private parseInstructions(entry: string) {
        const regexMoves = /move (?<move>\d+) from (?<from>\d+) to (?<to>\d+)/gm;
        let match = entry.matchAll(regexMoves).next();
        let instructions = {
            moveCount: parseInt(match.value.groups.move),
            moveFrom: parseInt(match.value.groups.from) - 1,
            moveTo: parseInt(match.value.groups.to) - 1
        };
        console.log(`REGEX MATCH : ${match.value} = ${JSON.stringify(instructions)}`);
        return instructions;
    }

    // boiler plate
    basePath(): string {
        return __dirname;
    };
}