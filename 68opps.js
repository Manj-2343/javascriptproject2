//methods-function inside the object.
person = {
  firstName: "Manoj",
  age: 9,
  about: function () {
    console.log(`person name is ${this.firstName} and the age is ${this.age}`);
    console.log(this);
    console.log(this.firstName);
    console.log(this.age)
  },
};
person.about();
//here this is the whole object
