"use strict";

const assert = require("assert");

describe("Sample Run", function () {
  describe("Indexed Array", function () {
    it("should return -1 when value is not present", function () {
      assert.equal([1, 2, 3].indexOf(4), -1);
    });
  });
});
