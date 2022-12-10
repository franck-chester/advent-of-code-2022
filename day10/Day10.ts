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

    register2(entries: string[]): number[] {
        let x = 1;
        let c = 1;
        let register = [];
        let i = 0;
        while(i < entries.length){
            register.push(x);
            let cmd, cnt
            console.log(`i = ${i} : entry[i] : ${entries[i]}`);
            [cmd, cnt] = entries[i].split(' ');
            if (cmd === 'addx' && c < entries.length-1){
                 x += parseInt(cnt);
                 register.push(x);
            }

            i++;
        }
        //console.log(addx);
        return register;
    }


    part1(entries: string[]): string {
        let solution = 0;
        [20,60,100,140,180,220].forEach(cycle =>{
            let r = this.register(entries,cycle)
            let s = cycle * r;
            console.log(`register at ${cycle} = ${r} - signal = ${s}`);
            solution += s;
        });

        return `${solution}`;
    };

    part2(entries: string[]): string {
        let register = this.register2(entries);
        let x = 1;
        let i = 0
        let row:string[] = ['#','#']
        for(let c=2; c<register.length; c++){
            let s = c%40;
            if(s==0){
                console.log(`${row.join('')}  - ${row.length} pixels`);
                row = [];
            }
            row.push(Math.abs(register[c-1]-s)<2?'#':'.');
            //console.log(`cycle ${c+1} s=${2} r=${register[c]} Math.abs(register[c]-s)=${Math.abs(register[c]-s)}: ${row.join('')}  - ${row.length} pixels`);
        }
        console.log(`${row.join('')}  - ${row.length} pixels`);
        return `???`;
    };

    // boiler plate

    basePath(): string {
        return __dirname;
    };

}