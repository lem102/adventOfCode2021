export const day1Part1 = (file: string) => {
  const input = Deno.readTextFileSync(file).split("\n").slice(0, -1).map(
    Number,
  );
  let increases = 0;
  for (let i = 1; i <= input.length; i++) {
    if (input[i] > input[i - 1]) {
      increases++;
    }
  }

  return increases;
};
