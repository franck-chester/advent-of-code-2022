import { Day } from "../lib/Day";

export class Day02 extends Day {
    part1Example(): string {
        return "15"
    }
    part2Example(): string {
        return "12"
    }


    // Rock defeats Scissors, Scissors defeats Paper, and Paper defeats Rock. 
    // 0 if you lost, 3 if the round was a draw, and 6 if you won
    scoring: Record<string, number> = {
        A: 1, // R
        B: 2, // P
        C: 3,  // S
        X: 1,  // R
        Y: 2,  // P
        Z: 3,   // S
        "A X": 3, // D
        "A Y": 6, // W
        "A Z": 0, // L

        "B X": 0, // L
        "B Y": 3, // D
        "B Z": 6, // W

        "C X": 6, // W
        "C Y": 0, // L
        "C Z": 3, // D
    };



    part1(entries: string[]): string {
        const scores = []
        let totalScore = 0;
        for (let i = 0; i < entries.length; i++) {
            let round = entries[i];
            let plays = round.split(' ');
            let outcome = this.scoring[round];
            let score = this.scoring[plays[1]] + outcome
            console.log(`entry = ${entries[i]}, round = ${round}, them : ${plays[0]}, you : ${plays[1]}, score = ${this.scoring[plays[1]]} + ${outcome} =  ${score}`);
            scores.push(score)
            totalScore += score

        }

        return `${totalScore}`;
    };

    // X means you need to lose, Y means you need to end the round in a draw, and Z means you need to win
    strategy: Record<string, string> = {
        "A X": "A Z", // L
        "A Y": "A X", // D
        "A Z": "A Y",  // W

        "B X": "B X", // L
        "B Y": "B Y", // D
        "B Z": "B Z", // W

        "C X": "C Y", // L
        "C Y": "C Z", // D
        "C Z": "C X", // W
    };


    part2(entries: string[]): string {
        const scores = []
        let totalScore = 0;
        for(let i=0; i<entries.length; i++){
            let round = entries[i];
            let plays = this.strategy[round].split(' ');
            let outcome = this.scoring[this.strategy[round]];
            let score = this.scoring[plays[1]] + outcome
            console.log(`entry = ${entries[i]}, round = ${plays}, them : ${plays[0]}, you : ${plays[1]}, score = ${this.scoring[plays[1]]} + ${outcome} =  ${score}`);
            scores.push(score)
            totalScore+= score
            
        }
        return `${totalScore}`;
    };

    // boiler plate

    basePath(): string {
        return __dirname;
    };

}