import { Day } from "../lib/Day";

export class Day09 extends Day {
    visited = new Set<string>(['0,0']);
    part1Example(): string {
        return "13"
    }
    part2Example(): string {
        return "???"
    }

    isAdjacent(xHead: number, yHead: number, xTail: number, yTail: number): boolean {

        return Math.abs(xHead - xTail) <= 1 && Math.abs(yHead - yTail) <= 1;
    }

    chase(xHead: number, yHead: number, xTail: number, yTail: number): number[] {
        if (this.isAdjacent(xHead, yHead, xTail, yTail)){
            this.visited.add(`${xTail},${yTail}`);
            return [xTail, yTail];
        }
        let x = xTail;
        let y = yTail;
        if (xHead > xTail) x++;
        if (xHead < xTail) x--;
        if (yHead > yTail) y++;
        if (yHead < yTail) y--;
        this.visited.add(`${x},${y}`);
        return [x, y];
    }

    up(count: number, XHead: number, YHead: number, XTail: number, YTail: number): number[] {
        let tail: number[] = [XTail, YTail];
        let head: number[] = [XHead, YHead];

        for (let i = 0; i < count; i++) {
            head[1]++;
            // @ts-ignore
            tail = this.chase(...head, ...tail);
        }
        return [...head, ...tail];
    }

    down(count: number, XHead: number, YHead: number, XTail: number, YTail: number): number[] {
        let tail: number[] = [XTail, YTail];
        let head: number[] = [XHead, YHead];

        for (let i = 0; i < count; i++) {
            head[1]--;
            // @ts-ignore
            tail = this.chase(...head, ...tail);
        }
        return [...head, ...tail];
    }

    right(count: number, XHead: number, YHead: number, XTail: number, YTail: number): number[] {
        let tail: number[] = [XTail, YTail];
        let head: number[] = [XHead, YHead];

        for (let i = 0; i < count; i++) {
            head[0]++;
            // @ts-ignore
            tail = this.chase(...head, ...tail);
        }
        return [...head, ...tail];
    }

    left(count: number, XHead: number, YHead: number, XTail: number, YTail: number): number[] {
        let tail: number[] = [XTail, YTail];
        let head: number[] = [XHead, YHead];

        for (let i = 0; i < count; i++) {
            head[0]--;
            // @ts-ignore
            tail = this.chase(...head, ...tail);
        }
        return [...head, ...tail];
    }

    part1(entries: string[]): string {
        let positions = [0, 0, 0, 0];
        for (let i = 0; i < entries.length; i++) {
            console.log(`entry = ${entries[i]}`);
            let e = entries[i].split(' ');
            let count = parseInt(e[1]);
            
            switch (e[0]!) {
                // @ts-ignore
                case 'U': positions = this.up(count, ...positions); break;
                // @ts-ignore
                case 'D': positions = this.down(count, ...positions); break;
                // @ts-ignore
                case 'L': positions = this.left(count, ...positions); break;
                // @ts-ignore
                case 'R': positions = this.right(count, ...positions); break;
            }

        }
        console.log(this.visited)
        return `${this.visited.size}`;
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