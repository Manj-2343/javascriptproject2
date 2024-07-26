//lexical environment ,scope chain
const lastName = "Biswal";
const printName = function () {
  const firstName = "Manoj";
  console.log(firstName);
  console.log(lastName);
};
printName();
