const defArgOne = require("./default-arg-1");

test("Returns default midpoint if both inputs are not given", () => {
  expect(defArgOne()).toBe(0.5);
});

test("Returns midpoint of valid argument and default if either inputs are not valid", () => {
  expect(defArgOne(2, undefined)).toBe(0.5);
});

test("Returns midpoint of given inputs if inputs are valid", () => {
  expect(defArgOne(1, 10)).toBe(5);
});
