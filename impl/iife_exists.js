var assert = require('assert');

var setValue = function () {
    var prevValue;
    return function (value) { // define setValue
        if (value !== prevValue) {
            console.log("Changed: "+value);
            prevValue = value;
        }
    };
}();
setValue(3);
// Succeeds:
assert.ok(typeof prevValue === 'undefined');