//some method
const numbers = [2, 3, 4, 6, 8, 9, 10];
// to check the number which is even or odd
const ans = numbers.some((number) => number % 2 === 0);
console.log(ans);
// ans:
// The some() method checks if at least one element in the array passes the test implemented by the provided function. In your case, the function checks if a number is even (i.e., number % 2 === 0).
// So, when you run your code, it will return true because at least one number in the array is even.
const userCart = [
  { productId: 1, productName: "mobile", price: 12200 },
  { productId: 2, productName: "Laptop", price: 22000 },
  { productId: 3, productName: "Tv", price: 24000 },
  { productId: 4, productName: "Antina", price: 100 },
];
//   i need to check any one of this product will go beyond the 20000
const ans1 = userCart.some((user) => user.price > 20000);
console.log(ans1);
