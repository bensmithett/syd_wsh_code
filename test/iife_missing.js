// Exercise:
// Create file impl/iife_exists that passes the test

var assert = require('assert');

var prevValue;
function setValue(value) {
    if (value !== prevValue) {
        console.log("Changed: "+value);
        prevValue = value;
    }
}
setValue(3);
// Fails:
assert.ok(typeof prevValue === 'undefined');