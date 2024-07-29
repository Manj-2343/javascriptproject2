// arrow function
const user1 = {
  firstName: "Manoj",
  age: 8,
  about: () => {
    console.log(this);
    console.log(this.firstName, this.age);
  },
};
user1.about().call(user1);
//ans:undefined undefined
//in arrow function there is no this
//this arrow function takes this in its soundings
//we can't change the arrow function this
//so the correct ans is 
// To fix this, you can define the about method as a traditional function instead of an arrow function: 
// const user1 = {
//   firstName: "Manoj",
//   age: 8,
//   about: function() {
//     console.log(this);
//     console.log(this.firstName, this.age);
//   },
// };
// user1.about();