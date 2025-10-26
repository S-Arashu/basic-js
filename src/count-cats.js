const { NotImplementedError } = require("../lib");

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
function countCats(matrix) {
  let numOfCats = 0;

  for (let subArr of matrix) {
    subArr.forEach((ears) => {
      if (ears === "^^" || ears === "^^") {
        numOfCats++;
      }
    });
  }

  return numOfCats;
}

module.exports = {
  countCats,
};
