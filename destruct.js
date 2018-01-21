function destruct() {
  // if (typeof arg !== typeof []) {
  //   return null;
  // }
  // if (arg.length !== 5) {
  //   return null;
  // }
  let arg = process.argv.slice(2);
  let extractObject = {};
  [, extractObject.username, extractObject.email] = arg;
  console.log(extractObject);
  // return extractObject;
}
destruct();
module.exports = destruct;
