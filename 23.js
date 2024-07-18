// how to iterate object
//for in loop
// Object.keys

const key = "email";
const person = {
  name: "Manoj",
  age: 27,
  "person hobbies": ["slepping", "eating", "coding"],
};
for (let key in person) {
  // this is the way to access the key
  //   console.log(person[key]);
  //if i want to access the both key and value pair
  console.log(`${key}:${person[key]}`);
}
console.log(Object.keys(person)); //it return the array
for (let key of Object.keys(person)) {
  console.log(person[key]);
}
