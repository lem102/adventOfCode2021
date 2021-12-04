export const day3Part2 = (file: string) => {
  const aux = (numbers : string[], index : number, f : (a: string[], b: string[]) => string[]) : string => {
    if (numbers.length === 1) {
      return numbers[0];
    }
    const onesAtIndex = numbers.filter((x) => x[index] === "1");
    const zeroesAtIndex = numbers.filter((x) => x[index] === "0");

    return aux(f(onesAtIndex, zeroesAtIndex), index+1, f);
  }

  const input = Deno.readTextFileSync(file)
    .split("\n")
    .slice(0, -1);

  const filterBasedOnOnes = (onesAtIndex: string[], zeroesAtIndex: string[]) => onesAtIndex.length >= zeroesAtIndex.length ? onesAtIndex : zeroesAtIndex;
  const filterBasedOnZeroes = (onesAtIndex: string[], zeroesAtIndex: string[]) => zeroesAtIndex.length <= onesAtIndex.length ? zeroesAtIndex : onesAtIndex;

  return parseInt(aux(input, 0, filterBasedOnOnes),2) * parseInt(aux(input, 0, filterBasedOnZeroes),2);
}
