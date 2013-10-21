var assert = require('assert');

// EXERCISE: implement a StringBuilder with the Crockford pattern
// You can base that version on the following code:
// support/StringBuilder_marked.js

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
