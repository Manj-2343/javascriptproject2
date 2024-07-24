//sort method
//the ascii value of the letter
//A=>65
//Z=>90
//a=>97
//z=>122
//"0"->"9" = 48-57
// const numbers = [5, 9, 1200, 400, 3000];
// numbers.sort((a, b) => {
//   return a - b;
// });
// or
// numbers.sort((a, b) => a - b);
//In javascript  make sorting the above array by considering the string
// console.log(numbers);
// conclusion of(a-b)
// ex:1200,400
//lets take the value is a = 1200
// and the b value  is = 400
// if the a-b =+ve then =>then ist place is b and a will be the second place
//if the a-b =-ve then =>then ist place is a and 2nd place is the b;

//conclusion of (b-a)
//price low to High and high to low
const products = [
  { productId: 1, productName: "p1", price: 300 },
  { productId: 2, productName: "p2", price: 400 },
  { productId: 3, productName: "p3", price: 200 },
  { productId: 4, productName: "p4", price: 600 },
  { productId: 5, productName: "p5", price: 500 },
  { productId: 6, productName: "p6", price: 800 },
];
//low to high
const lowToHigh = products.slice(0).sort((a, b) => a.price - b.price);
console.log(lowToHigh);
console.log(products);
//high to low
const HighToLow = products.slice(0).sort((a, b) => b.price - a.price);
console.log(HighToLow);
// ex:2
// Basic Sorting/ascending order
const stringArray = ["banana", "apple", "cherry", "date"];
stringArray.sort();
console.log(stringArray);
//Custom Sorting->Descending Order
const stringArray1 = ["banana", "apple", "cherry", "date"];
stringArray.sort((a, b) => b.localeCompare(a));
console.log(stringArray1);
//Case-Insensitive Sorting
const stringArray2 = ["Banana", "apple", "Cherry", "date"];
stringArray.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));
console.log(stringArray2);
// Custom Order Example(If you want to sort based on the length of the strings (from shortest to longest):)
const stringArray3 = ["banana", "apple", "cherry", "date"];
stringArray.sort((a, b) => a.length - b.length);
console.log(stringArray3);
// Complete Example with Multiple Sorting Criteria 
// ,\means->Let's combine multiple sorting criteria: first by length of the string and then alphabetically for strings of the same length
const stringArray4 = ["banana", "apple", "cherry", "date", "fig", "grape"];
stringArray.sort((a, b) => {
  if (a.length === b.length) {
    return a.localeCompare(b);
  }
  return a.length - b.length;
});
console.log(stringArray4);