// difference between dot notation and bracket notation
const key = "email";
const person = {
  name: "Manoj",
  age: 27,
  "person hobbies": ["slepping", "eating", "coding"],
};
console.log(person["person hobbies"]);
// how to add the key inside the object
person[key] = "manojbiswal5212gmail.com";
console.log(person);
