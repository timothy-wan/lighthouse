var assert = require("chai").assert;
var luhns = require("../luhns");

describe("Checks for number being in Luhns Algorithm", function() {
  it("should return true if 79927398713 is a valid Luhns digit", function() {
    assert.isTrue(luhns(79927398713));
  });
  it("should return true if 49927398716 is a valid Luhns digit", function() {
    assert.isTrue(luhns(49927398716));
  });
});

