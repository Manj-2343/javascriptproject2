//for of loop
const fruits = ["apple", "mango", "banana"];
const fruits2 = [];
for (let fruit of fruits) {
  fruits2.push(fruit);
}
console.log(fruits2);
//for in
const fruits1 = ["apple", "mango", "banana"];
const fruits3 = [];
for (let i in fruits1) {
  fruits3.push(fruits1[i]);
}
console.log(fruits3);
