import {assertEquals} from "https://deno.land/std@0.116.0/testing/asserts.ts";
import { day1Part1 } from "./day1/part1.ts";
import { day1Part2 } from "./day1/part2.ts";

Deno.test("day 1 part 1 sample", () => {
  const input = Deno.readTextFileSync("./day1/sampleInput.txt").split("\n").slice(0,-1).map(Number);
  const output = day1Part1(input);
  assertEquals(output, 7);
});

Deno.test("day 1 part 1 real", () => {
  const input = Deno.readTextFileSync("./day1/realInput.txt").split("\n").slice(0,-1).map(Number);
  const output = day1Part1(input);
  assertEquals(output, 1451);
});

Deno.test("day 1 part 2 sample", () => {
  const input = Deno.readTextFileSync("./day1/sampleInput.txt").split("\n").slice(0,-1).map(Number);
  const output = day1Part2(input);
  assertEquals(output, 5);
});

Deno.test("day 1 part 2 real", () => {
  const input = Deno.readTextFileSync("./day1/realInput.txt").split("\n").slice(0,-1).map(Number);
  const output = day1Part2(input);
  assertEquals(output, 7);
});
