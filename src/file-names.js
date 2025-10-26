const { NotImplementedError } = require("../lib");

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  let words = new Map();
  return names.map((name) => {
    if (words.has(name)) {
      let suf = words.get(name) + 1;
      words.set(name, suf);
      words.set(`${name}(${suf})`, 0);
      return `${name}(${suf})`;
    } else {
      words.set(name, 0);
      return name;
    }
  });
}

module.exports = {
  renameFiles,
};
