//function inside the object
function personInfo() {
  console.log(`person name is ${this.firstName} and the age is ${this.age}`);
}
const person1 = {
  firstName: "John",
  age: 8,
  about: personInfo,
};
const person2 = {
  firstName: "Mohit",
  age: 10,
  about: personInfo,
};
const person3 = {
  firstName: "harsit",
  age: 98,
  about: personInfo,
};
person1.about();
person2.about();
person3.about();
