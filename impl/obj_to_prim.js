var results = [ 'hello ', 'world' ];
var index = -1;
exports.obj1 = {
    toString: function () {
        index = (index + 1) % 2;
        return results[index];
    }
};

var counter = 0;
exports.obj2 = {
    valueOf: function () {
        counter++;
        return counter;
    }
};
