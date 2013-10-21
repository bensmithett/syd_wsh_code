var assert = require('assert');

var otp = require('../impl/obj_to_prim');

assert.strictEqual(otp.obj1 + otp.obj1, 'hello world');
assert.strictEqual(otp.obj1 + otp.obj1, 'hello world');

assert.strictEqual(Number(otp.obj2), 1);
assert.strictEqual(Number(otp.obj2), 2);
assert.strictEqual(otp.obj2 * otp.obj2, 12);
