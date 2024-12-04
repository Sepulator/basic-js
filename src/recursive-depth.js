const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates depth of nested array
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

  /** @param {Array} arr */
  calculateDepth(arr) {
    return arr.some((t) => Array.isArray(t)) ? 1 + this.calculateDepth(arr.flat()) : 1;
  }
}

module.exports = {
  DepthCalculator
};
