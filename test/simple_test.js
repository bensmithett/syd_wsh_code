var assert = require('assert');

var simple_m = require('../support/simple_module');
var spaceit = require('../support/simple_spaceit');
// Implement the following module, using the previous two
var combo = require('../impl/simple_combo');

assert.strictEqual(spaceit('hello'), 'h e l l o');
assert.strictEqual(spaceit('x'), 'x');

assert.strictEqual(simple_m.reverse('hello'), 'olleh');

// reverseSpace() combines the above two functions
assert.strictEqual(combo.reverseSpace('hello'), 'o l l e h');
