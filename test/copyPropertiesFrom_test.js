var assert = require('assert');
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

var target = copyPropertiesFrom({}, source);

// Prevent the function from simply returning the source
// (which would pass the subsequent tests)
assert.notStrictEqual(source, target);

Object.getOwnPropertyNames(source)
.forEach(function (key) {
    assert.deepEqual(
        Object.getOwnPropertyDescriptor(source, key),
        Object.getOwnPropertyDescriptor(target, key));
});

assert.deepEqual(
    Object.getOwnPropertyNames(source).sort(),
    Object.getOwnPropertyNames(target).sort());

