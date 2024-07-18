// Object
const person = {
  name: "Manoj",
  age: 27,
  hobbies: ["slepping", "eating", "coding"],
};
console.log(person);
console.log(person.hobbies); //this is dot notation
console.log(person["age"]); // bracket notation
// console.log(person);
// console.log(person.name);
// console.log(person.age);
//HOw to add key value pair in the object
person.gender = "Male";
person["lastName"] = "biswal";
console.log(person);
