//getter and setter
class person {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }
  get fullName() {
    //we used the get to modify the function to property
    return `${this.firstName} ${this.lastName} `;
  }
  //   setName(firstName, lastName) {
  //     this.firstName = firstName;
  //     this.lastName = lastName;
  //   }
  set fullName(fullName) {
    const [firstName, lastName] = fullName.split("");
    this.firstName = firstName;
    this.lastName = lastName;
  }
}

const person1 = new person("Manoj", "Biswal", 25);
// console.log(person1);
// console.log(person1.fullName); //its like the property
// console.log(person1.firstName);
// console.log(person1.lastName);
// person1.setName("Rajat", "Verma");
// console.log(person1.firstName, person1.lastName);
person1.fullName = "mohit verma";
console.log("fullname is ", person1);
