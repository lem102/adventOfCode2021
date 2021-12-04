export const day3Part1 = (file: string) => {
  const input = Deno.readTextFileSync(file)
    .split("\n")
    .slice(0, -1)
    .map((x) => x.split("").map(Number));

  const onesInColumn = [];
  let ones = 0;
  for (let x = 0; x < input[0].length; x++) {
    for (let y = 0; y < input.length; y++) {
      if (input[y][x] === 1) {
        ones++;
      }
    }
    onesInColumn.push(ones);
    ones = 0;
  }

  const gammaFunction = (x : number) => (input.length / 2) < x ? 1 : 0;
  const epsilonFunction = (x : number) => (input.length / 2) > x ? 1 : 0;

  const gammaRate = parseInt(onesInColumn.map(gammaFunction).join(""), 2);
  const epsilonRate = parseInt(onesInColumn.map(epsilonFunction).join(""), 2);
  
  return gammaRate * epsilonRate;
}
