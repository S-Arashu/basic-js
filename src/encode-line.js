const { NotImplementedError } = require("../lib");

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */

function encodeLine(str) {
  let arrFromString = str.split("");
  let newString = "";
  let currentChar = "";
  let currentCount = 0;

  for (let i = 0; i < arrFromString.length; i++) {
    if (arrFromString[i] === currentChar) {
      currentCount++;
    } else {
      if (currentChar !== "") {
        newString += currentCount > 1 ? currentCount : "";
        newString += currentChar;
      }

      currentChar = arrFromString[i];
      currentCount = 1;
    }
  }

  if (currentChar !== "") {
    newString += currentCount > 1 ? currentCount : "";
    newString += currentChar;
  }

  return newString;
}

module.exports = {
  encodeLine,
};
