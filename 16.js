let fruits = ["grapes", "apple", "mangoes"];
console.log(fruits);
// push in last
fruits.push("banana");
console.log(fruits);
//remove in last
let bia = fruits.pop(); //   1st it remove the fruits and return it
console.log(fruits);
console.log(bia);
//add in start->unshift
fruits.unshift("banana");
console.log(fruits);

// remove in start
let removedFruit = fruits.shift();
console.log(fruits);
console.log("removed fruits is", removedFruit);
