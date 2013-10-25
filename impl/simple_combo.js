var spaceit = require("../support/simple_spaceit");
var simple_m = require("../support/simple_module");

function reverseSpace(str) {
  return simple_m.reverse(spaceit(str));
};

exports.reverseSpace = reverseSpace;
