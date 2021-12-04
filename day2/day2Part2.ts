export const day2Part2 = (file: string) => {
  const input = Deno.readTextFileSync(file)
    .split("\n")
    .slice(0, -1)
    .map((x) => x.split(" "))
    .map((x) => ({
      direction: x[0],
      distance: Number(x[1]),
    }));

  let horizontalPosition = 0;
  let depth = 0;
  let aim = 0;
  for (const command of input) {
    if (command.direction === "forward") {
      horizontalPosition += command.distance;
      depth += aim * command.distance;
    }  else if (command.direction === "up") {
      aim -= command.distance;
    } else if (command.direction === "down") {
      aim += command.distance;
    }
  }
  return horizontalPosition * depth;
};
