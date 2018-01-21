function arrowFn() {
  // if (!Array.isArray(arr)) {
  //   return null;
  // }
  // if (arr.length === 0) {
  //   return null;
  // }
  let input = process.argv.slice(2);
  const newStr = input.map(x => x[0])
    .reduce((y, z) => y + z);
  // if (newStr.indexOf("null") > -1) {
  //   return null;
  // }
  console.log(`[${process.argv.slice(2).toString()}] becomes "${newStr}"`);
  // return newStr;
}
arrowFn();
module.exports = arrowFn;
