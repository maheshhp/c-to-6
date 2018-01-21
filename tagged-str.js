function processEsc(arg) {
  return arg.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/'/g, "&apos;")
    .replace(/"/g, "&quot;");
}
function taggedStr(argv, ...sub) {
  let res = argv[0];
  // if (typeof argv !== typeof "") {
  //   return null;
  // }
  // console.log(argv);
  for (let i = 0; i < sub.length; i += 1) {
    res += processEsc(sub[i]) + argv[i + 1];
  }
  // console.log(res);
  return res;
  // return processEsc(argv);
}
console.log(taggedStr`<b>${process.argv[2]} says</b>: "${process.argv[3]}"`);
module.exports = taggedStr;
