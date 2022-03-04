const assert = require("chai").assert;
// const sayHello = require("./app").sayHello;
// const addNumbers = require("./app").addNumbers;
const app = require("../app");

// Results
sayHello = app.sayHello();
addNumbers = app.addNumbers(5, 5);

describe("App", function () {
  describe("SayHello()", function () {
    it("sayHello should return hello", function () {
      assert.equal(sayHello, "Hello");
    });
    it("SayHello should return type string", function () {
      assert.typeOf(sayHello, "string");
    });
  });
  describe("addNumbers()", function () {
    it("addNumbers should be above 5", function () {
      assert.isAbove(addNumbers, 5);
    });
    it("addNumbers should be typeOf Number", function () {
      assert.typeOf(addNumbers, "number");
    });
  });
});
