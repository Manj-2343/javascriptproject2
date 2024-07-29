//do not do this mistake
const user1 = {
  firstName: "Manoj",
  age: 6,
  // about: function () {
  //   console.log(this.firstName, this.age);
  // },
  // or
  about() {
    console.log(this.firstName, this.age);
  },
};
const myFunc = user1.about;
myFunc();
// ans:undefined undefined
//problem is the this is not bind to my function
//how to solve this
// const myFunc = user1.about.bind(user1);
// myFunc();
