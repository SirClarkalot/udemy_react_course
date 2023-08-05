
class Human {
  // constructor() {
  //   this.gender = 'Male';
  gender = 'male';

  printMyGender = () => {
    console.log(this.gender)
    }
}

class Person extends Human {
    name = 'Sean';
    gender = 'Female';

    printMyName = () => {
    console.log(this.name);
    }
}
const person = new Person();
person.printMyName();
person.printMyGender();
