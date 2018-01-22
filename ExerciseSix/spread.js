function minFind() {
  // if (typeof arg !== typeof []) {
  //   return null;
  // }
  let arg = process.argv.slice(2);
  // let typeTest = arg.map((nArg) => { if (typeof nArg !== typeof 1) return "null"; return 1; }).toString().indexOf("null");
  // if (typeTest > -1) {
  //   return null;
  // }
  console.log(`The minimum of [${process.argv.slice(2).toString()}] is ${Math.min(...arg)}`);
  // return Math.min(...arg);
}
minFind();
module.exports = minFind;
