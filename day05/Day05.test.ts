import { describe, expect, test } from '@jest/globals';
import { Day05 } from './Day05'

const day = new Day05();
test("base path points to __dirname", () => expect(day.basePath()).toBe(__dirname));

describe.each([
    ["move 1 from 2 to 1", { moveCount: 1, moveFrom: 1, moveTo: 0 }],
    ["move 3 from 1 to 999", { moveCount: 3, moveFrom: 0, moveTo: 998 }],
    ["move 2 from 99 to 1", { moveCount: 2, moveFrom: 98, moveTo: 0 }],
    ["move 99 from 1 to 2", { moveCount: 99, moveFrom: 0, moveTo: 1 }]
])('parseInstructions', (entry: string, instructions: { moveCount: number, moveFrom: number, moveTo: number}) => {
    expect(day['parseInstructions'](entry)).toEqual(instructions);
});


describe.each([
    ["[A] ",        [[], [], [], [], [], [], [], [], []],                   [['A'], [], [], [], [], [], [], [], []]],
    ["[B] [C] ",    [[], [], [], [], [], [], [], [], []],                   [['B'], ['C'], [], [], [], [], [], [], []]],
    ["[D] [E] [F]", [['B'], ['C'], [], [], [], [], [], [], []],             [['D','B'], ['E','C'], ['F'], [], [], [], [], [], []]],
    ["[G] [H] [I]", [['D','B'], ['E','C'], ['F'], [], [], [], [], [], []],  [['G','D','B'], ['H','E','C'], ['I','F'], [], [], [], [], [], []]]
])('parseCrates', (entry: string, stacksIn: string[][], stacksOut: string[][]) => {
    expect(day['parseCrates'](entry, stacksIn)).toEqual(stacksOut);
});
