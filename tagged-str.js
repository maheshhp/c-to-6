function processEsc(arg) {
  return arg.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/'/g, "&apos;")
    .replace(/"/g, "&quot;");
}
function taggedStr(argv) {
  if (typeof argv !== typeof "") {
    return null;
  }
  return processEsc(argv);
}
module.exports = taggedStr;
