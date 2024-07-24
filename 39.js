// function returning function
function myFunc() {
  function two() {
    return "Hello, world!";
  }
  return two;
}
const ans = myFunc();
console.log(ans());
