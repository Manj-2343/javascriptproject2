// 1)
function happy() {
  console.log("Happy Birth Day to you...");
}
// 2)
function sum(number1, number2) {
  return number1 + number2;
}
// console.log(sum(5, 4));
// console.log(undefined + undefined); //NaN
//3)
function sumOfThree(num1, num2, num3) {
  return num1 + num2 + num3;
}
// console.log(sumOfThree(7, 8, 9));
//4)odd or even
function oddEven(number) {
  if (number % 2 === 0) {
    console.log("this is even number");
  }
  return console.log("this is odd number");
}
// oddEven(prompt("enter you number"));
// 5)
function newString(string) {
  return string[0];
}
// console.log(newString("zbc"));
//6)
function newArray(array, target) {
  return array.some((value) => value === target);
}

// console.log(newArray([3, 4, 6, 7, 8, 9, 0, 2], 12));
// or)
const findTarget = function (array, target) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === target) {
      return i;
    }
  }
  return -1;
}
console.log(findTarget([3, 4, 6, 7, 8, 9, 0, 2], 7));
//7)function expression
