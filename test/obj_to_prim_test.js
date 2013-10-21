var assert = require('assert');

// EXERCISE: implement a module that exports
// two objects obj1 and obj2
var otp = require('../impl/obj_to_prim');

// obj1 becomes a string when converted to primitive
assert.strictEqual(otp.obj1 + otp.obj1, 'hello world');
// Does the above work a second time, too?
assert.strictEqual(otp.obj1 + otp.obj1, 'hello world');

// obj2 becomes a number when converted to primitive
assert.strictEqual(Number(otp.obj2), 1);
assert.strictEqual(Number(otp.obj2), 2);
assert.strictEqual(otp.obj2 * otp.obj2, 12);
