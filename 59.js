//understand the call back
// function myFunc(callBack) {
//   console.log("function is doing some task 1");
//   callBack();
// }
// function myFunc2() {
//   console.log("function is doing some task 2");
// }
// myFunc(myFunc2);

function getTwoNumberAndAdd(number1, number2, callBack) {
  callBack(number1, number2);
}
function addTwoNumber(num1, num2) {
  console.log(num1 + num2);
}
getTwoNumberAndAdd(4, 5, addTwoNumber);
