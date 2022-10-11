/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */

function countCats(backyard) {
  let cats = 0;

  for (const bush of backyard) {
    for (const thing of bush) {
      if (thing === "^^") {
        cats += 1;
      }
    }
  }

  return cats;
}

module.exports = {
  countCats,
};
