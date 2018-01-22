function appendString(argOne, argTwo = arg => arg.length) {
  // if (typeof argOne !== typeof "") {
  //   return null;
  // }
  let strLen = 0;
  if (typeof argTwo !== typeof 1) {
    strLen = argTwo(argOne);
  } else {
    strLen = argTwo;
  }
  let transStr = argOne;
  for (let i = 0; i < strLen; i++) {
    transStr += '!';
  }
  return transStr;
}
module.exports = appendString;
