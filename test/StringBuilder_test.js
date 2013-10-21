var assert = require('assert');

// Implement StringBuilder with the Crockford pattern
// Version that uses marked property keys:
// StringBuilder_marked.js

var StringBuilder = require('../impl/StringBuilder');
var sb = new StringBuilder();
sb.add('Hello');
sb.add(' world!');
assert.strictEqual(sb.toString(), 'Hello world!');

var ownProps = Object.getOwnPropertyNames(sb);
ownProps.sort();
// add() and toString() are not in the prototype and
// there is no instance property for the buffer data
assert.deepEqual(ownProps, ['add', 'toString']);
