//how to clone the array
let arr1 = ["item1", "item2"];
// 1st method
// let arr2 = arr1.slice(0).concat(["item3", "item4"]);
// 2nd method
// let arr2 = [].concat(arr1, ["item3", "item4"]);
//3rd method
// let arr2 = [...arr1, "item3", "item4"];
// if we add one more array
let oneMoreArray = ["item3", "item4"];
let arr2 = [...arr1, ...oneMoreArray];
arr1.push("item3");
console.log(arr1 === arr2);
console.log(arr1);
console.log(arr2);
