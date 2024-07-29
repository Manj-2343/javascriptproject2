function CreateUser(firstName, lastName, email, age, address) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.email = email;
  this.age = age;
  this.address = address;
}
CreateUser.prototype.about = function () {
  return `${this.firstName} is ${this.age} years old`;
};
CreateUser.prototype.is18 = function () {
  return this.age >= 18;
};
CreateUser.prototype.sing = function () {
  return "tum hi ho";
};
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
for (let key in user1) {
  // here you get alll the key
  //   console.log(key);
  //if you want the key which is not comming from the prototype
  if (user1.hasOwnProperty(key)) {
    console.log(key);
  }
}
