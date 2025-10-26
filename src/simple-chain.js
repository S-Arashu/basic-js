const { decorateObject } = require("../lib");
const { NotImplementedError } = require("../lib");

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  _chain: [],

  getLength() {
    return this._chain.length;
  },
  addLink(value = "") {
    this._chain.push(String(value));

    return this;
  },
  removeLink(position) {
    if (
      typeof position !== "number" ||
      !Number.isInteger(position) ||
      this.getLength() === 0 ||
      position > this.getLength() ||
      position < 1
    ) {
      this._chain = [];
      throw new Error("You can't remove incorrect link!");
    }
    const index = position - 1;
    this._chain = [
      ...this._chain.slice(0, index),
      ...this._chain.slice(index + 1),
    ];

    return this;
  },
  reverseChain() {
    this._chain.reverse();

    return this;
  },
  finishChain() {
    let chainLinks = `( ${this._chain.join(" )~~( ")} )`;
    this._chain = [];
    return chainLinks;
  },
};

module.exports = {
  chainMaker,
};
