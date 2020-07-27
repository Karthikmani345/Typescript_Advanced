"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Animal = void 0;
var Animal;
(function (Animal) {
    var haveMuscles = true;
    function animalsHaveMuscles() {
        return haveMuscles;
    }
    Animal.animalsHaveMuscles = animalsHaveMuscles;
    var Lion = /** @class */ (function () {
        function Lion() {
        }
        Lion.prototype.lionName = function () {
            console.log('i am lion');
        };
        return Lion;
    }());
    Animal.Lion = Lion;
})(Animal = exports.Animal || (exports.Animal = {}));
