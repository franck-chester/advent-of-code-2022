import { Day } from "../lib/Day";

export class Day03 extends Day {
    part1Example(): string {
        return "157"
    }
    part2Example(): string {
        return "70"
    }

    // Lowercase item types a (97) through z have priorities 1 through 26.
    // Uppercase item types A (65) through Z have priorities 27 through 52.
    priority(item: string): number {
        let code = item.charCodeAt(0)
        if (code <= 'Z'.charCodeAt(0)) return code - 38
        return code - 96
    };

    part1(rucksacks: string[]): string {
        const priorities = []
        let totalScore = 0;
        for (let i = 0; i < rucksacks.length; i++) {
            let rucksack = rucksacks[i];
            let half = rucksack.length / 2
            let compartment1 = rucksack.slice(0, half);
            let compartment2 = rucksack.slice(half, rucksack.length);
            let shared = []

            for (let j = 0; j < half; j++) {
                let item = compartment1.charAt(j)
                if (compartment2.includes(item)) {
                    shared.push(item)
                }

            }
            let p = this.priority(shared[0])
            console.log(`rucksack  = ${rucksack}, half = ${half}, shared = ${shared}, priority = ${p}`);
            totalScore += p
        }

        return `${totalScore}`;
    };


    part2(rucksacks: string[]): string {
        let totalScore = 0;
        for (let i = 0; i < rucksacks.length; i+=3) {
            let group = [rucksacks[i], rucksacks[i+1], rucksacks[i+2]]
            group.sort((a,b) => a.length - b.length)
            
            let shared = []

            for (let j = 0; j < group[0].length; j++) {
                let item = group[0].charAt(j)
                if (group[1].includes(item) && group[2].includes(item) ) {
                    shared.push(item)
                }

            }
            let p = this.priority(shared[0])
            console.log(`i : ${i} group (sorted)  = ${group}, shared = ${shared}, priority = ${p}`);
            totalScore += p
        }
        return `${totalScore}`;
    };

    // boiler plate

    basePath(): string {
        return __dirname;
    };

}