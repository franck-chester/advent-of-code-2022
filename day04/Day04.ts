import { Day } from "../lib/Day";

export class Day04 extends Day {
    part1Example(): string {
        return "2"
    }
    part2Example(): string {
        return "4"
    }

    includesAllOf(p1: string[], p2: string[]): boolean {
        return (parseInt(p1[0]) >= parseInt(p2[0])) && (parseInt(p1[1]) <= parseInt(p2[1]))
    }

    overlaps1(p1: string[], p2: string[]) {
        return this.includesAllOf(p1, p2) || this.includesAllOf(p2, p1);
    }

    part1(entries: string[]): string {
        let totalScore = 0;
        for (let i = 0; i < entries.length; i++) {
            let entry = entries[i]
            let pairs = entry.split(',')
            let p1 = pairs[0].split('-');
            let p2 = pairs[1].split('-');
            let overlap = this.overlaps1(p1, p2);
            totalScore += overlap ? 1 : 0;
            if (overlap) console.log(`entry= ${entry}, p1 = ${p1}, p2 = ${p2}, overlap = ${overlap} , includes (${p1},${p2}) = ${this.includesAllOf(p1, p2)} includes (${p2},${p1}) = ${this.includesAllOf(p2, p1)} `);
        }

        return `${totalScore}`;
    };

    includesPartOf(p1: string[], p2: string[]) {
        return (parseInt(p1[0]) >= parseInt(p2[0])) && (parseInt(p1[0]) <= parseInt(p2[1]))
    }

    overlaps2(p1: string[], p2: string[]) {
        return this.includesPartOf(p1, p2) || this.includesPartOf(p2, p1);
    }

    part2(entries: string[]): string {
        let totalScore = 0;
        for (let i = 0; i < entries.length; i++) {
            let entry = entries[i]
            let pairs = entry.split(',')
            let p1 = pairs[0].split('-');
            let p2 = pairs[1].split('-');
            let overlap = this.overlaps2(p1, p2);
            totalScore += overlap ? 1 : 0;
            console.log(`entry= ${entry}, p1 = ${p1}, p2 = ${p2}, overlap = ${overlap} , includes (${p1},${p2}) = ${this.includesPartOf(p1, p2)} includes (${p2},${p1}) = ${this.includesPartOf(p2, p1)} `);
        }
        return `${totalScore}`;
    };

    // boiler plate

    basePath(): string {
        return __dirname;
    };

}