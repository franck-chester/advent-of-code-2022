import { Day } from "../lib/Day";

export class Day10 extends Day {
    part1Example(): string {
        return "???"
    }
    part2Example(): string {
        return "???"
    }

    register(entries: string[], cycle: number): number {
        let x = 1;
        let c = 1;
        let addx = [];
        let i = 0;
        while(c < cycle){
            let cmd, cnt
            [cmd, cnt] = entries[i].split(' ');
            if (cmd === 'addx' && c < cycle-1){
                 addx.push(cnt);
                 x += parseInt(cnt);

                 c+=2;
            }
            else{
                c++;
            }
            i++;
        }
        //console.log(addx);
        return x;
    }

    part1(entries: string[]): string {

        let x = 1;
        let register: number[] = [1];
        let count: number[] = [1, 0, 0];
        let solution = 0;
        [20,60,100,140,180,220].forEach(cycle =>{
            let r = this.register(entries,cycle)
            let s = cycle * r;
            console.log(`register at ${cycle} = ${r} - signal = ${s}`);
            solution += s;
        });

        return `${solution}`;
    };

    private signal(cycle: number, register: number[]) {
        return cycle * register[cycle];
    }

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