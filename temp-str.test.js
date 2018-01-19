const tempStr = require("./temp-str");

test("Returns undefined if input argument is empty", () => {
  expect(tempStr()).toBe(undefined);
});

test("Returns null if input argument is null", () => {
  expect(tempStr(null)).toBe(null);
});

test("Returns string in specified format if input argument is not empty", () => {
  expect(tempStr("Dominic")).toMatch("Hello Dominic!\nYour name lowercased is \"dominic\".");
});
