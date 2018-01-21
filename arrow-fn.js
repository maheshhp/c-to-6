function arrowFn(arr) {
  if (!Array.isArray(arr)) {
    return null;
  }
  if (arr.length === 0) {
    return null;
  }
  const newStr = arr.map((x) => { if (typeof x !== typeof "") return null; return x[0]; })
    .reduce((y, z) => y + z);
  if (newStr.indexOf("null") > -1) {
    return null;
  }
  return newStr;
}
module.exports = arrowFn;
