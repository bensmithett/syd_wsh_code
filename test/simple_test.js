var assert = require('assert');

var spaceit = require('../support/simple_spaceit');
var simple_m = require('../support/simple_module');

// EXERCISE: implement the following module, using the previous two
var combo = require('../impl/simple_combo');

//// Test module simple_spaceit
assert.strictEqual(spaceit('hello'), 'h e l l o');
assert.strictEqual(spaceit('x'), 'x');

//// Test module simple_module
assert.strictEqual(simple_m.reverse('hello'), 'olleh');

//// Test module simple_combo
// reverseSpace() combines the above two functions
assert.strictEqual(combo.reverseSpace('hello'), 'o l l e h');
