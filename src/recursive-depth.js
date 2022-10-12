/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 *
 * @example
 *
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */

class DepthCalculator {
  calculateDepth(arr) {
    let depth = 0;

    for (const element of arr) {
      if (element instanceof Array) {
        depth = Math.max(this.calculateDepth(element), depth);
      }
    }

    return depth + 1;
  }
}

module.exports = {
  DepthCalculator,
};
