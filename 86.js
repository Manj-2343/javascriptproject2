//class
//class are fake
class CreateUser {
  constructor(firstName, lastName, email, age, address) {
    console.log("constructor called");
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.age = age;
    this.address = address;
  }
  about = function () {
    return `${this.firstName} is ${this.age} years old`;
  };
  is18 = function () {
    return this.age >= 18;
  };
  sing = function () {
    return "tum hi ho";
  };
  func(a) {
    console.log(a);
  }
}
//this below is 85 file
// function CreateUser(firstName, lastName, email, age, address) {
//   this.firstName = firstName;
//   this.lastName = lastName;
//   this.email = email;
//   this.age = age;
//   this.address = address;
// }
// CreateUser.prototype.about = function () {
//   return `${this.firstName} is ${this.age} years old`;
// };
// CreateUser.prototype.is18 = function () {
//   return this.age >= 18;
// };
// CreateUser.prototype.sing = function () {
//   return "tum hi ho";
// };
const user1 = new CreateUser(
  "manoj",
  "biswal",
  "manoj@gail.com",
  19,
  "Myaddress"
);
const user2 = new CreateUser(
  "mamoj",
  "biswal",
  "mamoj@gail.com",
  9,
  "Myownaddress"
);
console.log(user1.firstName);
console.log(user1.is18());
console.log(user1.sing());
console.log(user1.func("Manoj"));
