export const day2Part1 = (file: string) => {
  const input = Deno.readTextFileSync(file)
    .split("\n")
    .slice(0, -1)
    .map((x) => x.split(" "))
    .map((x) => ({
      direction: x[0],
      distance: Number(x[1]),
    }));

  let horizontalPosition = 0;
  let verticalPosition = 0;
  for (const command of input) {
    if (command.direction === "forward") {
      horizontalPosition += command.distance;
    } else if (command.direction === "up") {
      verticalPosition -= command.distance;
    } else if (command.direction === "down") {
      verticalPosition += command.distance;
    }
  }
  return horizontalPosition * verticalPosition;
};
