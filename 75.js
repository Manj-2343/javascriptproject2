//bind method
function about(hobby, favMusician) {
  console.log(this.firstName, this.age, hobby, favMusician);
}
const user1 = {
  firstName: "Manoj",
  age: 8,
};
const user2 = {
  firstName: "Mohit",
  age: 82,
};
const func = about.bind(user1, "sleeping", "arjit");
func();
//but here this bind method give us the function
