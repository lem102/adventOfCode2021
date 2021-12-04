export const day4Part1 = (file: string) => {
  const readBoards = (input : string[]) =>
    input.reduce((accumulator, current) => accumulator + " " + current)
      .split(" ")
      .filter(x => x !== "")
      .map(Number);
  const inputLines = Deno.readTextFileSync(file).split("\n");
  const randomNumbers = inputLines[0].split(",").map(Number);
  const boards = readBoards(inputLines.slice(1));

  const getNumberFromBoard = (board: number, column: number, row: number) =>
    boards[(board * 25) + (column * 5) + row];

  const getWinningBoardAndDraw = () => {
    for (let drawnIndex = 0; drawnIndex < randomNumbers.length; drawnIndex++) {
      for (let boardIndex = 0; boardIndex < boards.length/25; boardIndex++) {
        // check each row
        for (let columnIndex = 0; columnIndex <= 4; columnIndex++) {
          let rowAllDrawn = true;
          for (let rowIndex = 0; rowIndex <= 4; rowIndex++) {
            rowAllDrawn = rowAllDrawn &&
              randomNumbers
                .slice(0, drawnIndex+1)
                .includes(getNumberFromBoard(boardIndex,
                                             columnIndex,
                                             rowIndex));
            console.log(randomNumbers.slice(0, drawnIndex));
            console.log(getNumberFromBoard(boardIndex,
                                           columnIndex,
                                           rowIndex));
            console.log(rowAllDrawn = rowAllDrawn &&
              randomNumbers
                .slice(0, drawnIndex)
                .includes(getNumberFromBoard(boardIndex,
                                             columnIndex,
                                             rowIndex)));
          }
          if (rowAllDrawn)
            return { boardIndex, drawnIndex };
        }
        // check each column
        for (let rowIndex = 0; rowIndex <= 4; rowIndex++) {
          let columnAllDrawn = true;
          for (let columnIndex = 0; columnIndex <= 4; columnIndex++) {
            columnAllDrawn = columnAllDrawn &&
              randomNumbers
                .slice(0, drawnIndex + 1)
                .includes(getNumberFromBoard(boardIndex,
                                             columnIndex,
                                             rowIndex));
          }
          if (columnAllDrawn)
            return { boardIndex, drawnIndex };
        }
      }
    }
    return "shouldn't get here";
  }

  console.log(getWinningBoardAndDraw());
}
