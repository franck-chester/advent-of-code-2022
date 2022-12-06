import { describe, expect, test } from '@jest/globals';
import { Day06 } from './Day06'

const day = new Day06(true);
test('repeats("mjqj")', () => expect(day.repeats("mjqj")).toBe(true));
test('repeats("jqjp")', () => expect(day.repeats("jqjp")).toBe(true));
test('repeats("jpqm")', () => expect(day.repeats("jpqm")).toBe(false));
test("part 1 - mjqjpqmgbljsphdztnvjfqwrcgsmlb", () => expect(day.part1(["mjqjpqmgbljsphdztnvjfqwrcgsmlb"])).toBe("7"));
test("part 1 - bvwbjplbgvbhsrlpgdmjqwftvncz", () => expect(day.part1(["bvwbjplbgvbhsrlpgdmjqwftvncz"])).toBe("5"));
test("part 1 - nppdvjthqldpwncqszvftbrmjlhg", () => expect(day.part1(["nppdvjthqldpwncqszvftbrmjlhg"])).toBe("6"));
test("part 1 - nznrnfrfntjfmvfwmzdfjlvtqnbhcprsg", () => expect(day.part1(["nznrnfrfntjfmvfwmzdfjlvtqnbhcprsg"])).toBe("10"));
test("part 1 - zcfzfwzzqfrljwzlrfnpqdbhtmscgvjw", () => expect(day.part1(["zcfzfwzzqfrljwzlrfnpqdbhtmscgvjw"])).toBe("11"));

test("part 2 - mjqjpqmgbljsphdztnvjfqwrcgsmlb", () => expect(day.part2(["mjqjpqmgbljsphdztnvjfqwrcgsmlb"])).toBe("19"));
test("part 2 - bvwbjplbgvbhsrlpgdmjqwftvncz", () => expect(day.part2(["bvwbjplbgvbhsrlpgdmjqwftvncz"])).toBe("23"));
test("part 2 - nppdvjthqldpwncqszvftbrmjlhg", () => expect(day.part2(["nppdvjthqldpwncqszvftbrmjlhg"])).toBe("19"));
test("part 2 - nznrnfrfntjfmvfwmzdfjlvtqnbhcprsg", () => expect(day.part2(["nznrnfrfntjfmvfwmzdfjlvtqnbhcprsg"])).toBe("19"));
test("part 2 - zcfzfwzzqfrljwzlrfnpqdbhtmscgvjw", () => expect(day.part2(["zcfzfwzzqfrljwzlrfnpqdbhtmscgvjw"])).toBe("19"));