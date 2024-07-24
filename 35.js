//defaultParameter
function addtwo(a, b) {
  if (typeof b === "undefined") {
    b = 0;
  }
  return a + b;
}
const ans = addtwo(4);
console.log(ans);

function addtwo(a, b = 0) {
  return a + b;
}
const ans1 = addtwo(4,6);
console.log(ans1);
