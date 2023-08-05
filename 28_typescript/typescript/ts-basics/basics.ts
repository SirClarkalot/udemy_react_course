//primitives: number, string, boolen


// primitives

let age: number = 12
let userName: string = 'seanypee'
let isStudent = true

// complex types

let hobbies: string[];

hobbies = ['Basketball', 'Football']

// let person: any;

let person: {
  name: string,
  age: number
};

person = {
  name: 'Sean',
  age: 34
}

// person = {
//   isStudent: true
// }

let people: {
  name: string,
  age: number
}[];

people  = [
  {
    name: 'Sean',
    age: 34
  },
  {
    name: 'jw',
    age: 28
  }
]

// type inference

let course = 'React the complete guide'
course = 12345;

// Union types

let courseUnion: string | number = 'React the complete guide'
courseUnion = 'a course'
courseUnion = 12345;

// Type alias
type Person = {
  name: string,
  age: number
}

let peopleAlias: Person[]
peopleAlias =   [{
    name: 'Sean',
    age: 34
  },
  {
    name: 'jw',
    age: 28
  }
]

// function with types and genereric types

// can set types for parameters
function addition(a: number, b: number) {
  return a + b
}

console.log('in Basic')

function print(value: any) {
  console.log(value)
}

// Generics
 function insertAtBeginning<T>(array: T[], value: T) {
  const newArray = [value, ...array]
  return newArray
 }

 const demoArray = [1,2,3];
 const updatedArray = insertAtBeginning(demoArray, -1)
 const stringArray = insertAtBeginning(['a','b','c'],'d')
