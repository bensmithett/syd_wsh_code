var assert = require('assert');

var isObject = require('../impl/isObject');

assert.strictEqual(isObject({}), true);
assert.strictEqual(isObject([]), true);
assert.strictEqual(isObject(function () {}), true);

assert.strictEqual(isObject(undefined), false);
assert.strictEqual(isObject(null), false);

assert.strictEqual(isObject(Object.create(null)), true);
assert.strictEqual(isObject(Object.prototype), true);