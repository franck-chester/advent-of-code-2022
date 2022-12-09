import { describe, expect, test } from '@jest/globals';
import { Day09 } from './Day09'

let day = new Day09();
test("adjacent 1", () => expect(day.isAdjacent(0,0,0,0)).toBe(true));
test("adjacent 2", () => expect(day.isAdjacent(0,0,1,0)).toBe(true));
test("adjacent 3", () => expect(day.isAdjacent(0,0,0,1)).toBe(true));
test("adjacent 4", () => expect(day.isAdjacent(1,0,0,0)).toBe(true));
test("adjacent 5", () => expect(day.isAdjacent(0,1,0,0)).toBe(true));
test("adjacent 6", () => expect(day.isAdjacent(1,1,0,0)).toBe(true));
test("adjacent 7", () => expect(day.isAdjacent(0,2,0,0)).toBe(false));
test("adjacent 8", () => expect(day.isAdjacent(2,0,0,0)).toBe(false));
test("adjacent 9", () => expect(day.isAdjacent(2,2,0,0)).toBe(false));
test("chase 01", () => expect(day.chase(0,0,0,0)).toEqual([0,0]));
test("chase 02", () => expect(day.chase(2,0,0,0)).toEqual([1,0]));
test("chase 03", () => expect(day.chase(0,2,0,0)).toEqual([0,1]));
test("chase 04", () => expect(day.chase(0,0,2,0)).toEqual([1,0]));
test("chase 05", () => expect(day.chase(0,0,0,2)).toEqual([0,1]));
test("chase 06", () => expect(day.chase(0,0,0,0)).toEqual([0,0]));
test("up 01", () => expect(day.up(4,0,0,0,0)).toEqual([0,4,0,3]));
day.visited = new Set([]);
test("example R 4", () => {
    let pos = day.right(4,0,0,0,0);
    expect(pos).toEqual([4,0,3,0]);
    expect(day.visited).toEqual(new Set([
        '0,0',
        '1,0',
        '2,0',
        '3,0'
    ]));
});
test("example U 4", () => expect(day.up(4,   4,0,3,0)).toEqual([4,4,4,3]));
test("example L 3", () => expect(day.left(3, 4,4,4,3)).toEqual([1,4,2,4]));
test("example D 1", () => expect(day.down(1, 1,4,2,4)).toEqual([1,3,2,4]));