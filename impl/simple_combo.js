var simple_m = require('../support/simple_module');
var spaceit = require('../support/simple_spaceit');

function reverseSpace(str) {
    return spaceit(simple_m.reverse('hello'));
}

exports.reverseSpace = reverseSpace;
