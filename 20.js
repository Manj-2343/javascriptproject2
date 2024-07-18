//array destructing
const myArray = ["value1", "value2", "value3", "value4", "value5"];
// let [myArray1, myArray2] = myArray;
// console.log("my 1st value is", myArray1, "and my 2nd value is", myArray2);
// how to get value3 in myArray2;
// let [myArray3, , myArray4] = myArray;
// console.log("my 1st value is", myArray3, "and my 2nd value is", myArray4);
// how to get the value 4 and 5 simultaneously
let [myArray1, myArray2, ...myArray3] = myArray;
console.log(
  "my 1st value is",
  myArray1,
  "and my 2nd value is",
  myArray2,
  "and rest value in",
  myArray3
);
