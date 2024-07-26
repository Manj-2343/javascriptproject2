console.log(this);
console.log(window);
console.log(myFunction);
console.log(fullName);
function myFunction() {
  console.log("this is my function");
}
var firstName = "Manoj";
var lastName = "Biswal";
var fullName = `${firstName} ${lastName}`;
console.log(fullName);
//this function is created using function keyword so it will be present in the global scope
//hoisting
