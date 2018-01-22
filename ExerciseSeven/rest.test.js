const findAvg = require('./rest');

test('Returns null if input argument is empty', () => {
  expect(findAvg()).toBe(null);
});

test('Returns null if input argument is empty', () => {
  expect(findAvg([])).toBe(undefined);
});

test('Returns null if input argument is not an array', () => {
  expect(findAvg('Hello')).toBe(null);
});

test('Returns null if input argument array contains invalid types', () => {
  expect(findAvg(['Hello', 2, 3])).toBe(null);
});

test('Returns object in specified format if input argument is valid', () => {
  expect(findAvg([1, 2, 3, 4])).toBe(10);
});

test('Returns object in specified format if input argument is valid', () => {
  expect(findAvg([1, 0, -1])).toBe(0.33);
});
