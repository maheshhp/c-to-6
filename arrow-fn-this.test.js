const foot = require("./arr-fn-this");

test("Returns undefined for anonymous function", () => {
  expect(foot()).toBe(undefined);
});

test("Returns Ouch! for arrow function", () => {
  expect(foot()).toMatch("Ouch!");
});
