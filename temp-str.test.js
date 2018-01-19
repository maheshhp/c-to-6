const tempStr = require("./temp-str");

test("Returns undefined if input argument is empty", () => {
  expect(tempStr()).toBe(undefined);
});

test("prints and returns HELLO ES6", () => {
  expect(tempStr(null)).toBe(null);
});
