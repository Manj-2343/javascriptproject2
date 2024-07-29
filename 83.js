//new Keyword
function createUser(firstName, age) {
  this.firstName = firstName;
  this.age = age;
}
createUser.prototype.about = function () {
  console.log(this.firstName, this.age);
};
const user1 = new createUser("Manoj", 8);
//new key word
//1.)create one empty object
//2.)then this will be set to {}
//3.) Object.create(createUser.prototype);this work will be done by new keyword
console.log(user1);
