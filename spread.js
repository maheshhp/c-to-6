function minFind(arg) {
  if (typeof arg !== typeof []) {
    return null;
  }
  let typeTest = arg.map((nArg) => { if (typeof nArg !== typeof 1) return "null"; return 1; }).toString().indexOf("null");
  if (typeTest > -1) {
    return null;
  }
  return Math.min(...arg);
}
module.exports = minFind;
