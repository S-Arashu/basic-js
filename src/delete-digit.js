const { NotImplementedError } = require("../lib");

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
  let max = 0;
  let str = n.toString();

  for (let i = 0; i < str.length; i++) {
    let newStr = str.substring(0, i) + str.substring(i + 1);

    max = Math.max(max, parseInt(newStr));
  }

  return max;
}

module.exports = {
  deleteDigit,
};
