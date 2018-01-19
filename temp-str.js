function tempStr(testArg) {
  // const nameString = process.argv[2];
  const nameString = testArg;
  if (nameString === null) {
    return null;
  }
  if (nameString === undefined) {
    return undefined;
  }
}
module.exports = tempStr;
