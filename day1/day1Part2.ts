export const day1Part2 = (file: string) => {
  const input = Deno.readTextFileSync(file).split("\n").slice(0, -1).map(
    Number,
  );
  const measurements = [];
  for (let i = 3; i <= input.length; i++) {
    measurements.push(
      input.slice(i - 3, i).reduce((current, total) => total + current),
    );
  }

  let increases = 0;
  for (let i = 1; i <= measurements.length; i++) {
    if (measurements[i] > measurements[i - 1]) {
      increases++;
    }
  }

  return increases;
};
