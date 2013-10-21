// Implement Employee as a sub-constructor of Person

var assert = require('assert');
var Person = require('../support/Person');
var Employee = require('../impl/Employee');

// Structure of the prototype
assert.ok(Person.prototype.isPrototypeOf(Employee.prototype));
assert.ok(Employee.prototype.constructor === Employee);

// An instance of Employee
var jane = new Employee('Jane', 'CTO');

assert.equal(jane.name, 'Jane');
assert.equal(jane.title, 'CTO');
assert.ok(jane instanceof Person);
assert.ok(jane instanceof Employee);
assert.ok(jane.describe === Employee.prototype.describe);

// The overriding method must call the super-method
assert.strictEqual(jane.describe(), 'Person called Jane (CTO)');
Person.prototype.describe = function () {
    return 'X';
};
assert.strictEqual(jane.describe(), 'X (CTO)');
