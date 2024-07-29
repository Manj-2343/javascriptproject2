// const userMethod = {
//     about: function () {
//       return `${this.firstName} is ${this.age} years old`;
//     },
//     is18: function () {
//       return this.age >= 18;
//     },
//     sing: function () {
//       return "tum hi ho";
//     },
//   };
function createUser(firstName, lastName, email, age, address) {
  const user = Object.create(createUser.prototype);
  user.firstName = firstName;
  user.lastName = lastName;
  user.email = email;
  user.age = age;
  user.address = address;
  return user;
}
createUser.prototype.about = function () {
  return `${this.firstName} is ${this.age} years old`;
};
createUser.prototype.is18 = function () {
  return this.age >= 18;
};
createUser.prototype.sing = function () {
  return "tum hi ho";
};
const user1 = createUser("manoj", "biswal", "manoj@gail.com", 19, "Myaddress");
const user2 = createUser("mamoj","biswal","mamoj@gail.com",9,"Myownaddress"
);
console.log(user1.about());
console.log(user1.is18());
console.log(user1.sing());

console.log(createUser.prototype);
