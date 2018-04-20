'use strict';

var add = function add(a, b) {
    //console.log(arguments)
    return a + b;
};

console.log(add(55, 1, 1001));

var user = {
    'name': 'Andrew',
    cities: ['philadelphia', 'NY', 'LZC'],
    printPlacesLived: function printPlacesLived() {
        var _this = this;

        this.cities.forEach(function (city) {
            console.log(_this.name + 'has lived in ' + city);
        });
    }
};

const multiplier = {
    numbers:[10,20,30],
    multiplyBy:3,
    multiply(){
        return this.numbers.map(number => number * this.multiplyBy)
    }
}

console.log(multiplier.multiply())
