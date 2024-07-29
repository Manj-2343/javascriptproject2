//again some issue with the file 79
const userMethod = {
  about: function () {
    return `${this.firstName} is ${this.age} years old`;
  },
  is18: function () {
    return this.age >= 18;
  },
  sing: function () {
    return "tum hi ho";
  },
};
function createUser(firstName, lastName, email, age, address) {
  const user = Object.create(userMethod);
  user.firstName = firstName;
  user.lastName = lastName;
  user.email = email;
  user.age = age;
  user.address = address;
  return user;
}
const user1 = createUser("manoj", "biswal", "manoj@gail.com", 19, "Myaddress");
const user2 = createUser(
  "mamoj",
  "biswal",
  "mamoj@gail.com",
  9,
  "Myownaddress"
);
console.log(user1.about());
// console.log(user2.about());
// console.log(user1.sing());
