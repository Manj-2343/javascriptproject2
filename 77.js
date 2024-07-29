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
