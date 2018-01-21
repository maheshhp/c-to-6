function destruct(arg) {
  if (typeof arg !== typeof []) {
    return null;
  }
  if (arg.length !== 5) {
    return null;
  }
  let extractObject = {};
  [, extractObject.username, extractObject.email] = arg;
  return extractObject;
}
module.exports = destruct;
