const minFind = require('./spread');

test('Returns null if input argument is empty', () => {
  expect(minFind()).toBe(null);
});

test('Returns undefined if input argument is an empty array', () => {
  expect(minFind([])).toBe(undefined);
});


test('Returns null if input argument is not an array', () => {
  expect(minFind('Hello')).toBe(null);
});

test('Returns null if input argument array contains invalid types', () => {
  expect(minFind(['Hello', 2, 3])).toBe(null);
});

test('Returns object in specified format if input argument is valid', () => {
  expect(minFind([1, 2, 3, 4])).toBe(1);
});
