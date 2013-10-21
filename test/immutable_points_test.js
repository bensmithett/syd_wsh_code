'use strict';

var assert = require('assert');

// EXERCISE:
// Turn the mutable support/mutable_points.js
// into the immutable impl/immutable_points.js

var Point = require('../impl/immutable_points').Point;
var ColorPoint = require('../impl/immutable_points').ColorPoint;

var pt = new Point(1, 2);
checkPoint(new Point(1, 2),
    { x: 1, y: 2});
checkPoint(new ColorPoint(3, 4, 'Green'),
    { x: 3, y: 4, color: 'Green' });

function checkPoint(pt, props) {
    // Check each property mentioned by props
    Object.keys(props)
    .forEach(function (key) {
        // Does pt have a property with the appropriate value?
        assert.ok(pt.hasOwnProperty(key));
        assert.strictEqual(pt[key], props[key]);

        // Is there an exception if the property of pt is modified?
        assert.throws(
            function () {
                // Fresh object, guaranteed to be different
                pt[key] = {}; // must throw (strict mode!)
            },
            TypeError,
            'No exception when changing the property '+key+
            ' of an instance of '+pt.constructor.name);
        // Value still the same?
        assert.strictEqual(pt[key], props[key],
            'Should not be able to change the property '+key+
            ' of an instance of '+pt.constructor.name);
    });
}
