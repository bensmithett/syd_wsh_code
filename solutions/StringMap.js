"use strict";

var hasOwnProperty = Object.prototype.hasOwnProperty;

/*
 * Escape "bad" keys.
 */
function escapeKey(key) {
    // We need to escape "__proto__", but also the (n times) escaped version of it, to avoid clashes
    if (key.indexOf("__proto__") === 0) {
        return key+"%";
    } else {
        return key;
    }
}

function StringMap() {
    this._data = Object.create(null);
}

/**
 * Add an entry to the map.
 *
 * @param key The key of the entry
 * @param value The value of the entry
 */
StringMap.prototype.set = function (key, value) {
    key = escapeKey(key);
    this._data[key] = value;
};

/**
 * Retrieve the value of an entry from the map.
 *
 * @param key The key of the entry
 */
StringMap.prototype.get = function (key) {
    key = escapeKey(key);
    return this._data[key];
};
StringMap.prototype.delete = function (key) {
    key = escapeKey(key);
    var value = this._data[key];
    delete this._data[key];
    return value;
};

/**
 * Is there an entry with the given key in the map?
 */
StringMap.prototype.hasKey = function (key) {
    key = escapeKey(key);
    return key in this._data;
};

module.exports = StringMap;