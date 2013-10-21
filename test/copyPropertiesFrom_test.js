var assert = require('assert');

// EXERCISE: implement the function
// copyPropertiesFrom(target, source)
var copyPropertiesFrom = require('../impl/copyPropertiesFrom');

var source = Object.defineProperties({}, {
    foo: {
        value: 123,
        writable: false,
        enumerable: true,
        configurable: false
    },
    bar: {
        value: 'abc',
        writable: true,
        enumerable: true,
        configurable: true
    }
});

var target = {};
var result = copyPropertiesFrom(target, source);

// The function must return its first argument
// (after modifying it)
assert.strictEqual(result, target);

// All properties of source must exist in target
// and have the same attributes
Object.getOwnPropertyNames(source)
.forEach(function (key) {
    assert.deepEqual(
        Object.getOwnPropertyDescriptor(source, key),
        Object.getOwnPropertyDescriptor(target, key));
});

// source and target must have the same property keys
assert.deepEqual(
    Object.getOwnPropertyNames(source).sort(),
    Object.getOwnPropertyNames(target).sort());

