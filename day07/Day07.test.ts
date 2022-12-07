import { describe, expect, test } from '@jest/globals';
import { Day07 } from './Day07'

const day = new Day07();
test("part 1 test", () => expect(day.part1(day.entries)).toBe(day.part1Example()));
test("part 2 test", () => expect(day.part2(day.entries)).toBe(day.part2Example()));