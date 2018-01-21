const defArgTwo = require("./default-arg-2");

test("Returns null if no arguments are given", () => {
  expect(defArgTwo()).toBe(null);
});

test("Returns null if first argument is not a String", () => {
  expect(defArgTwo(undefined)).toBe(null);
});

test("Returns string appendded with given length of ! characters", () => {
  expect(defArgTwo("Hello", 2)).toMatch("Hello!!");
});

test("Returns string appendded with ! characters equal to length of the String", () => {
  expect(defArgTwo("Hello", undefined)).toMatch("Hello!!!!!");
});
