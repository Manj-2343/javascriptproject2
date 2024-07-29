//apply method
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
//apply
about.apply(user1, ["sleeping", "arjit"]);
//apply method only take an array to create argument like["sleeping", "arjit"]
