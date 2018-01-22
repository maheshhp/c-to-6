const taggedStr = require('./tagged-str');

test('Returns null if input argument is empty', () => {
  expect(taggedStr()).toBe(null);
});

test('Returns string with tags replaced with escape sequences', () => {
  expect(taggedStr('<b>Dominic says</b>: <dl> is a fun tag')).toMatch('&lt;b&gt;Dominic says&lt;/b&gt;: &lt;dl&gt; is a fun tag');
});
