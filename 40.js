// important array methods
//forEach
//map
//filter
//reduce
const numbers = [4, 5, 2, 8];

// const multByTwo = (number, index) => {
//   console.log("index is", index);
//   console.log(number * 2);
// };
// for (let i = 0; i <= numbers.length; i++) {
//   multByTwo(numbers[i], i);
// }

numbers.forEach((number, index) => {
  console.log(`index is ${index} but the number is ${number}`);
});
