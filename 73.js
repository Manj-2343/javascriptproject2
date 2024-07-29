//how to modify the function with short hand
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
about.call(user2, "sleeping", "arjit");
//here call method passing the parameter in string format not array like  "sleeping", "arjit"
