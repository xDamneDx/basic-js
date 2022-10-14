/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */

function minesweeper(matrix) {
  const blankMatrix = matrix.map((line) => line.map((_) => 0));

  blankMatrix.map((line, lineIndex) =>
    line.map((_, cellIndex) => {
      if (matrix[lineIndex][cellIndex]) {
        for (let li = lineIndex - 1; li <= lineIndex + 1; li += 1) {
          if (li > -1) {
            for (let ci = cellIndex - 1; ci <= cellIndex + 1; ci += 1) {
              if (ci > -1 && !(li === lineIndex && ci === cellIndex)) {
                blankMatrix[li][ci] += 1;
              }
            }
          }
        }
      }
    })
  );

  return blankMatrix;
}

module.exports = {
  minesweeper,
};
