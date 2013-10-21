'use strict';
var assert = require('assert');

// Exercise: create an object with a read-only property 'foo'
// whose value is 123.
// To do so, use a getter without a setter.
var obj = require('../impl/read_only');

var propDesc = Object.getOwnPropertyDescriptor(obj, 'foo');
// Must not be a normal property
assert.ok(! ('value' in propDesc));
assert.throws(
	function () {
	    obj.foo = 'abc'; // must throw
	},
	TypeError);
// Still the same value?
assert.strictEqual(obj.foo, 123);


