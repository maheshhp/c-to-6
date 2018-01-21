function processEsc(arg) {
  return arg.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/'/g, "&apos;")
    .replace(/"/g, "&quot;");
}
function taggedStr(argv) {

}
module.exports = taggedStr;
