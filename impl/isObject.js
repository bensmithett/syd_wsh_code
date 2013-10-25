function isObject ( arg ) {
  return (
    arg !== null && typeof arg === 'object' || typeof arg === 'function');

};

module.exports = isObject;