const assert = require("chai").assert;
const app = require("../app");

describe("Functions", () => {
  describe("#sumOfNIntegers", () => {
    it("Should take an array of n number of integers and return their sum", () => {
      assert.deepEqual(app.sumOfNIntegers([6, 8, 90, 88, 567, 65, 4, 3, -20, -55]), 756)
    });
  });
});


module.exports = sumOfNIntegers
