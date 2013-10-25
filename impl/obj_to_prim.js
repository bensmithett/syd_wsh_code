var results = ["hello", "world"];
var i = -1;

exports.obj1 = {
  toString: function () {
    i = i+1;
    return results[i];
  }
};

var counter = 0
exports.obj2 = {
  valueOf: function () {
    counter++;
    return counter;
  }
};
