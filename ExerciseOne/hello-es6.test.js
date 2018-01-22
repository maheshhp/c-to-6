const helloWorld = require('./hello-es6');

test('prints and returns undefined', () => {
  expect(helloWorld()).toBe(undefined);
});

test('prints and returns HELLO ES6', () => {
  expect(helloWorld('HELLO ES6')).toMatch('HELLO ES6');
});
