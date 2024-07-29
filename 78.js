//oops
// const user1 = {
//   firstName: "Manoj",
//   lastName: "Biswal",
//   email: "manojbiswal521@gmail.com",
//   age: 8,
//   address: "Jadupur",
//   about: function () {
//     return `${this.firstName} is ${this.age} years old`;
//   },
//   is18: function () {
//     return this.age >= 18;
//   },
// };
// const aboutUser = user1.about();
// console.log(aboutUser);
//here the problem is ,if we want 1lakh user we can't create the 1lakh user
//how to sole this
//1.we create on function that create the object
//2.add key value pair
//3.lastly returning an object.
function createUser(firstName, lastName, email, age, address) {
  const user = {};
  user.firstName = firstName;
  user.lastName = lastName;
  user.email = email;
  user.age = age;
  user.address = address;
  user.about = function () {
    return `${this.firstName} is ${this.age} years old`;
  };
  user.is18 = function () {
    return this.age >= 18;
  };
  return user;
}
const user1 = createUser("manoj", "biswal", "manoj@gail.com", 19, "Myaddress");
console.log(user1);
const is28 = user1.is18();
console.log(is28);
const about = user1.about();
console.log(about);
