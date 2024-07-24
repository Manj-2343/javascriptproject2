//every method
const numbers = [2, 3, 4, 6, 7, 8, 9];

// const ans = numbers.every((number) => number % 2 === 0);
// the cal back function return the true and false
// every return method return the boolean value
//it will return "true" if the condition satisfy all the value of the array
//it will return "false" if the condition does not  satisfy any one condition
// console.log(ans);
// ex:
const userCart = [
  { productId: 1, productName: "mobile", price: 12200 },
  { productId: 2, productName: "Laptop", price: 22000 },
  { productId: 3, productName: "Tv", price: 24000 },
  { productId: 4, productName: "Antina", price: 100 },
];
//   check every product <30000
const ans = userCart.every((cartItem) => cartItem.price < 30000);
console.log(ans);
