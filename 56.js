//closer
// ex:1
/**const outerFunc = () => {
  function innerFunc() {
    console.log("Hello world");
  }
  return innerFunc;
};
const ans = outerFunc();
ans();*/
const printFullName = (firstName, lastName) => {
  const printName = () => {
    console.log(firstName, lastName);
  };
  return printName;
};
const ans1 = printFullName("Manoj", "Biswal");
// console.log(ans);
// ans();
function hello(x) {
  const a = "varA";
  const b = "VarB";
  return function () {
    console.log(a, b, x);
  };
}
// const ans = hello("arg");
// ans();

const myFunction = (power) => {
  return function (number) {
    return number ** power;
  };
};
const cube = myFunction(2);
const ans = cube(3);
console.log(ans);
