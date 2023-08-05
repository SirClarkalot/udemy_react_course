//primitives: number, string, boolen
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// primitives
var age = 12;
var userName = 'seanypee';
var isStudent = true;
// complex types
var hobbies;
hobbies = ['Basketball', 'Football'];
// let person: any;
var person;
person = {
    name: 'Sean',
    age: 34
};
// person = {
//   isStudent: true
// }
var people;
people = [
    {
        name: 'Sean',
        age: 34
    },
    {
        name: 'jw',
        age: 28
    }
];
// type inference
var course = 'React the complete guide';
course = 12345;
// Union types
var courseUnion = 'React the complete guide';
courseUnion = 'a course';
courseUnion = 12345;
var peopleAlias;
peopleAlias = [{
        name: 'Sean',
        age: 34
    },
    {
        name: 'jw',
        age: 28
    }
];
// function with types and genereric types
// can set types for parameters
function addition(a, b) {
    return a + b;
}
console.log('in Basic');
function print(value) {
    console.log(value);
}
// Generics
function () { }
insertAtBeginning(array, any[], value, any);
{
    var newArray = __spreadArray([value], array, true);
    return newArray;
}
