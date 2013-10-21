'use strict';

var assert = require('assert');

// Make support/mutable_points.js immutable

var Point = require('../impl/immutable_points').Point;
var ColorPoint = require('../impl/immutable_points').ColorPoint;

var pt = new Point(1, 2);
checkPoint(new Point(1, 2),
    { x: 1, y: 2});
checkPoint(new ColorPoint(3, 4, 'Green'),
    { x: 3, y: 4, color: 'Green' });

function checkPoint(pt, props) {
    Object.keys(props)
    .forEach(function (key) {
        var value = props[key];
        assert.ok(pt.hasOwnProperty(key));
        assert.strictEqual(pt[key], value);
        assert.throws(
            function () {
                // Fresh object, guaranteed to be different
                pt[key] = {}; // must throw (strict mode!)
            },
            TypeError,
            'No exception when changing the property '+key+
            ' of an instance of '+pt.constructor.name);
        // Value still the same?
        assert.strictEqual(pt[key], value,
            'Was able to change the property '+key+
            ' of an instance of '+pt.constructor.name);
    });
}
