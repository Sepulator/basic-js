const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const str = String(n);
  let max = Number(str[0]);
  for (let i = 0; i < str.length - 1; i += 1) {
    const newMax = Number(str.slice(0, i) + str.slice(i + 1));
    if (newMax > max) max = newMax;
  }
  return max;
}

console.log(deleteDigit(10));

module.exports = {
  deleteDigit
};
