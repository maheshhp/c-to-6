const arrowFn = require("./arrow-fn");

test("Returns null for no argumnets", () => {
  expect(arrowFn()).toBe(null);
});

test("Returns null for non array arguments", () => {
  expect(arrowFn("abcd")).toBe(null);
});

test("Returns string containing first character of array elements for valid strings", () => {
  expect(arrowFn(["Hello", "World"])).toMatch("HW");
});

test("Returns null for invalid strings in array", () => {
  expect(arrowFn([1, "2"])).toBe(null);
});
