var assert = require('assert');

var StringMap = require('../impl/StringMap');

var sm = new StringMap();

// Should not invoke hasOwnProperty() on data object
sm.set('hasOwnProperty', 123);
assert.strictEqual(sm.get('hasOwnProperty'), 123);

// Must escape the key '__proto__'
sm.set('__proto__', 'abc');
assert.strictEqual(sm.get('__proto__'), 'abc');

// Do inherited properties bleed in?
assert.strictEqual(sm.get('toString'), undefined);
assert.ok(!sm.hasKey('toString'));

// Test delete() and hasKey()
assert.ok(!sm.hasKey('foo'));
sm.set('foo', 3);
assert.ok(sm.hasKey('foo'));
sm.delete('foo');
assert.ok(!sm.hasKey('foo'));
