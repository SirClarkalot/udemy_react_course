// class Person {
//   constructor() {
//     this.name = 'Sean';

//   }

//   printMyName () {
//     console.log(this.name);
//   }
// }

// const person = new Person();
// person.printMyName();

// classes can also inherit

class Human {
  constructor() {
    this.gender = 'Male';
  }

  printMyGender() {
    console.log(this.gender)
  }
}
class Person extends Human {
  constructor() {
    super ();
    this.name = 'Sean';
    this.gender = 'Non-binary';
  }
  printMyName() {
    console.log(this.name);
  }
}
const person = new Person();
person.printMyName();
person.printMyGender();
