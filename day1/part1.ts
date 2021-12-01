export const day1Part1 = (input: number[]) => {
  let increases = 0;
  for (let i = 1; i <= input.length; i++) 
    if (input[i] > input[i-1]) 
      increases++;

  return increases;
}
