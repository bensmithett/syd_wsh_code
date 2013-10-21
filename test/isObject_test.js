var assert = require('assert');

// EXERCISE: implement a function isObject(value)
// that checks whether value is an object
var isObject = require('../impl/isObject');

// Objects
assert.strictEqual(isObject({}), true);
assert.strictEqual(isObject([]), true);
assert.strictEqual(isObject(function () {}), true);

// Non-objects
assert.strictEqual(isObject(undefined), false);
assert.strictEqual(isObject(null), false);

// Unusual objects (that are not instances of Object!)
assert.strictEqual(isObject(Object.create(null)), true);
assert.strictEqual(isObject(Object.prototype), true);