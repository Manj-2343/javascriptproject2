//map method
// const numbers = [3, 4, 6, 8];
// const myNewNumber = numbers.map((number, index) => {
//   return number * number;
// });
// console.log(myNewNumber);
const users = [
  { firstName: "Manoj", lastName: "Tendulkar", age: 67 },
  { firstName: "Saroj", lastName: "Bimbal", age: 90 },
  { firstName: "Ragni", lastName: "Biswal", age: 79 },
];
const newArray = users.map((user) => user.firstName);
console.log(newArray);
