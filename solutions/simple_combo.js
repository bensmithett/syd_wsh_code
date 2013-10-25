var spaceit = require('../support/simple_spaceit');
var simple_m = require('../support/simple_module');

function reverseSpace(str) {
    return spaceit(simple_m.reverse('hello'));
}

exports.reverseSpace = reverseSpace;
