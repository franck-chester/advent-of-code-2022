import { describe, expect, test } from '@jest/globals';
import { Day06 } from './Day06'

const day = new Day06(true);
test("part 1 test", () => expect(day.repeats("mjqj")).toBe(true));
test("part 1 test", () => expect(day.repeats("jqjp")).toBe(true));
test("part 1 test", () => expect(day.repeats("jpqm")).toBe(false));
test("mjqjpqmgbljsphdztnvjfqwrcgsmlb", () => expect(day.part1(["mjqjpqmgbljsphdztnvjfqwrcgsmlb"])).toBe("7"));
test("bvwbjplbgvbhsrlpgdmjqwftvncz", () => expect(day.part1(["bvwbjplbgvbhsrlpgdmjqwftvncz"])).toBe("5"));
test("nppdvjthqldpwncqszvftbrmjlhg", () => expect(day.part1(["nppdvjthqldpwncqszvftbrmjlhg"])).toBe("6"));
test("part 1 test", () => expect(day.part1(["nznrnfrfntjfmvfwmzdfjlvtqnbhcprsg"])).toBe("10"));
test("part 1 zcfzfwzzqfrljwzlrfnpqdbhtmscgvjw", () => expect(day.part1(["zcfzfwzzqfrljwzlrfnpqdbhtmscgvjw"])).toBe("11"));
test("part 2 test", () => expect(day.part2(day.entries)).toBe(day.part2Example()));