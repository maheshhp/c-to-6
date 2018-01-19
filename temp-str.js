function tempStr(testArg) {
  // const nameString = process.argv[2];
  const nameString = testArg;
  if (nameString === null) {
    return null;
  }
  if (nameString === undefined) {
    return undefined;
  }
  return `Hello ${testArg}!\nYour name lowercased is "${testArg.toLowerCase()}".`;
}
module.exports = tempStr;
