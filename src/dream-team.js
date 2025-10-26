const { NotImplementedError } = require("../lib");

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  if (!Array.isArray(members)) {
    return false;
  }

  let team = "";
  members.forEach((name) => {
    if (typeof name === "string") {
      const trimmedName = name.trim();

      team += trimmedName[0].toUpperCase();
    }
  });

  return team.split("").sort().join("");
}

module.exports = {
  createDreamTeam,
};
