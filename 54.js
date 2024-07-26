//function execution context
let foo = "foo"; //1
console.log(foo);//2
function getFullName(firstName, lastName) {
  console.log(arguments); //1
  let myVar = "var inside func"; //2
  console.log(myVar); //3
  const fullName = firstName + " " + lastName; //4
  return fullName; //5
} //3
const personName = getFullName("Manoj", "Biswal"); //4
console.log(personName); //5
