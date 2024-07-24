// important array methods
//forEach
//map
//filter
//reduce
// const numbers = [4, 5, 2, 8];

// const multByTwo = (number, index) => {
//   console.log("index is", index);
//   console.log(number * 2);
// };
// for (let i = 0; i <= numbers.length; i++) {
//   multByTwo(numbers[i], i);
// }

// numbers.forEach((number, index) => {
//   console.log(
//     `index is ${index} but the number is ${number} and the multiple is ${
//       number * 2
//     }`
//   );
// });
const users = [
  { firstName: "Manoj", lastName: "Tendulkar", age: 67 },
  { firstName: "Saroj", lastName: "Bimbal", age: 90 },
  { firstName: "Ragni", lastName: "Biswal", age: 79 },
];
users.forEach((user, i) => {
  console.log(
    `My Name is ${user.firstName} ${user.lastName} and my age is ${user.age} `
  );
});
