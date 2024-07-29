//call method
const user1 = {
  firstName: "Manoj",
  age: 8,
  about: function (hobby, favMusician) {
    console.log(this.firstName, this.age);
  },
};
const user2 = {
  firstName: "Mohit",
  age: 82,
};
//how to access the user1(about) in user2 to use the call method
user1.about(); //ans=>Manoj 8
user1.about.call(); //=>"undefined undefined"
//here if i passed nothing in the call i get "undefined undefined"
user1.about.call(user2); //=>Mohit 82
