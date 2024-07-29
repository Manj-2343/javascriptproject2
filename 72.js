//if we passed the parameter inside the function
const user1 = {
  firstName: "Manoj",
  age: 8,
  about: function (hobby, favMusician) {
    console.log(this.firstName, this.age, hobby, favMusician);
  },
};
const user2 = {
  firstName: "Mohit",
  age: 82,
};
user1.about.call(user2, "sleeping", "arjit");
