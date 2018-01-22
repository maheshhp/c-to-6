module.exports = {
    "extends": "airbnb-base",
    "rules" : {
    "semi" : ["error", "always"],
    "quotes" : ["error", "single"],
    "indent" : [2, 2, {"SwitchCase" : 1}],
    "no-console": 0,
    "no-var" : 1,
    "prefer-const" : 0
  },
  "env" : {"es6" : true, node:true}
};
