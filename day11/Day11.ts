import { Day } from "../lib/Day";

class Monkey {
    monkeys: Monkey[];
    items: number[];
    operation: (item: number) => number;
    divisibleBy: number;
    ifTrue: number;
    ifFalse: number;
    inspections = 0;
    constructor(monkeys: Monkey[], items: number[], operation: (i: number) => number, divisibleBy: number, ifTrue: number, ifFalse: number) {
        this.monkeys = monkeys;
        this.items = items;
        this.operation = operation;
        this.divisibleBy = divisibleBy;
        this.ifTrue = ifTrue;
        this.ifFalse = ifFalse;
    }
    throwTo(item: number, m: Monkey): void {
        m.items.push(item);
    }
    takeTurn(monkeyName: string): string {
        let item;
        while (item = this.items.shift()) {
            this.inspections++;
            let stress1 = this.operation(item);
            let stress = Math.floor(stress1 / 3);
            console.log(`${monkeyName} : stress ${item} - ops -> ${stress1} - div 3 -> ${stress}`);
            this.throwTo(stress,
                0 == stress % this.divisibleBy
                    ? this.monkeys[this.ifTrue]
                    : this.monkeys[this.ifFalse]);
        }
        return this.items.join(',');
    }

}


export class Day11 extends Day {
    part1Example(): string {
        return "???"
    }
    part2Example(): string {
        return "???"
    }

    part1(entries: string[]): string {

        let monkeys: Monkey[] = [];
        // monkeys.push(new Monkey(monkeys,
        //     [79, 98],
        //     (old: number) => old * 19,
        //     23,
        //     2,
        //     3
        // ));
        // monkeys.push(new Monkey(monkeys,
        //     [54, 65, 75, 74],
        //     (old: number) => old + 6,
        //     19,
        //     2,
        //     0
        // ));
        // monkeys.push(new Monkey(monkeys,
        //     [79, 60, 97],
        //     (old: number) => old * old,
        //     13,
        //     1,
        //     3
        // ));
        // monkeys.push(new Monkey(monkeys,
        //     [74],
        //     (old: number) => old + 3,
        //     17,
        //     0,
        //     1
        // ));

        monkeys.push(new Monkey(monkeys,  // monkey 0
            [54, 82, 90, 88, 86, 54],
            (old: number) => old * 7,
            11,
            2,
            6
        ));

        monkeys.push(new Monkey(monkeys,  // monke 1
            [91, 65],
            (old: number) => old * 13,
            5,
            7,
            4
        ));

        monkeys.push(new Monkey(monkeys, // monkey 2
            [62, 54, 57, 92, 83, 63, 63],
            (old: number) => old + 1,
            7,
            1,
            7
        ));

        monkeys.push(new Monkey(monkeys, // monkey 3
            [67, 72, 68],
            (old: number) => old * old,
            2,
            0,
            6
        ));

        monkeys.push(new Monkey(monkeys, // monkey 4
            [68, 89, 90, 86, 84, 57, 72, 84],
            (old: number) => old + 7,
            17,
            3,
            5
        ));

        monkeys.push(new Monkey(monkeys, // monkey 5
            [79, 83, 64, 58],
            (old: number) => old + 6,
            13,
            3,
            0
        ));

        monkeys.push(new Monkey(monkeys, // monkey 6
            [96, 72, 89, 70, 88],
            (old: number) => old + 4,
            3,
            1,
            2
        ));

        monkeys.push(new Monkey(monkeys, // monkey 7
            [79],
            (old: number) => old + 8,
            19,
            4,
            5
        ));

        for (let i = 0; i < 20; i++) {
            console.log(`Round : ${i}`);
            for (let m = 0; m < monkeys.length; m++) {
                console.log(`Monkey ${m} : ${monkeys[m].takeTurn(`Monkey ${m}`)}`);
            }

        }

        for (let m = 0; m < monkeys.length; m++) {
            console.log(`Monkey ${m} : ${monkeys[m].inspections} inspections`);
        }
        return `??`;
    };

    part2(entries: string[]): string {
        let solution = "???"
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