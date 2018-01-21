const destruct = require("./destruct");

test("Returns null if input argument is empty", () => {
  expect(destruct()).toBe(null);
});

test("Returns null if input argument is not an array", () => {
  expect(destruct("Hello")).toBe(null);
});

test("Returns null if input argument array contains less than 5 items", () => {
  expect(destruct(["Hello", "World"])).toBe(null);
});

test("Returns object in specified format if input argument is valid", () => {
  expect(destruct([1, "jdoe", "john@doe.com", "John", "Doe"])).toEqual({ username: "jdoe", email: "john@doe.com" });
});
