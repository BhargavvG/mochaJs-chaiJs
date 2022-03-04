var assert = require("assert");
var chai = require("chai");
var expect = chai.expect;

describe("Array", function () {
  describe("#indexOf()", function () {
    it("should return -1 when the value is not present", function () {
      assert.equal([1, 2, 3].indexOf(4), -1);
    });
  });
});
describe("chains", function () {
  it("not", function () {
    expect({ a: 1 }).to.not.have.property("b");
    expect([1, 2]).to.be.an("array").that.does.not.include(3);
  });

  it("deep", function () {
    // Target object deeply (but not strictly) equals `{a: 1}`
    expect({ a: 1 }).to.deep.equal({ a: 1 });
    expect({ a: 1 }).to.not.equal({ a: 1 });

    // Target array deeply (but not strictly) includes `{a: 1}`
    expect([{ a: 1 }]).to.deep.include({ a: 1 });
    expect([{ a: 1 }]).to.not.include({ a: 1 });

    // Target object deeply (but not strictly) includes `x: {a: 1}`
    expect({ x: { a: 1 } }).to.deep.include({ x: { a: 1 } });
    expect({ x: { a: 1 } }).to.not.include({ x: { a: 1 } });

    // Target array deeply (but not strictly) has member `{a: 1}`
    expect([{ a: 1 }]).to.have.deep.members([{ a: 1 }]);
    expect([{ a: 1 }]).to.not.have.members([{ a: 1 }]);

    // Target set deeply (but not strictly) has key `{a: 1}`
    expect(new Set([{ a: 1 }])).to.have.deep.keys([{ a: 1 }]);
    expect(new Set([{ a: 1 }])).to.not.have.keys([{ a: 1 }]);

    // Target object deeply (but not strictly) has property `x: {a: 1}`
    expect({ x: { a: 1 } }).to.have.deep.property("x", { a: 1 });
    expect({ x: { a: 1 } }).to.not.have.property("x", { a: 1 });
  });
});
