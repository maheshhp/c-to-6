function findAvg(arg) {
  if (typeof arg !== typeof []) {
    return null;
  }
  let typeTest = arg.map((nArg) => { if (typeof nArg !== typeof 1) return "null"; return 1; }).toString().indexOf("null");
  if (typeTest > -1) {
    return null;
  }
  return arg.reduce((acc, ele) => acc + ele);
}
module.exports = findAvg;
