import { describe, expect, test } from '@jest/globals';
import { Day10 } from './Day10'

const day = new Day10();
test("part 1 test", () => expect(day.part1(day.entries)).toBe(day.part1Example()));
test("part 2 test", () => expect(day.part2(day.entries)).toBe(day.part2Example()));