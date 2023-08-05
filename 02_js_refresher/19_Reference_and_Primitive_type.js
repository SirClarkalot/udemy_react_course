
// Primitive Type
// const number = 1;
// const num2 = number;

// console.log(num2)
// copies value one into num2
// numbers, strings, and booleans are all primitive types

// Reference Type
// Objects and Arrays are reference types
 const person = {
  name: 'Sean'
 };

 const secondPerson = {
  ...person
 };
 person.name = 'Clark';
 console.log(secondPerson)

//  person is stored in memory, and its pointer is copied to the second variable
