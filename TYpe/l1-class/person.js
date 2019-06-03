"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    Person.prototype.Show = function (age) {
        console.log(this.name + " have " + age);
    };
    Person.prototype.toString = function () {
        return "..... " + this.name;
    };
    return Person;
}());
exports.Person = Person;
//# sourceMappingURL=person.js.map