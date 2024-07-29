//some issue with 78 file  code this way you solve it
const userMethod = {
  about: function () {
    return `${this.firstName} is ${this.age} years old`;
  },
  is18: function () {
    return this.age >= 18;
  },
};
function createUser(firstName, lastName, email, age, address) {
  const user = {};
  user.firstName = firstName;
  user.lastName = lastName;
  user.email = email;
  user.age = age;
  user.address = address;
  user.about = userMethod.about;
  user.is18 = userMethod.is18;
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
console.log(user2.about());
