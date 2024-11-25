const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  stash: [],
  getLength() {
    return this.stash.length;
  },
  addLink(value) {
    this.stash.push(`( ${value} )`);
    return this;
  },
  removeLink(position) {
    if (!this.stash[position - 1]) {
      this.stash = [];
      throw new Error('You can\'t remove incorrect link!');
    }

    this.stash = this.stash.filter((_, index) => (index) !== position - 1);
    return this;
  },
  reverseChain() {
    this.stash.reverse();
    return this;
  },
  finishChain() {
    const result = this.stash.join('~~');
    this.stash = [];
    return result;
  }
};

module.exports = {
  chainMaker
};
