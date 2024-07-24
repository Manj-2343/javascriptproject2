//block scope vrs function scope

function myApp() {
  if (true) {
    var firstName = "Manoji";
    console.log(firstName);
  }
  console.log(firstName);
}
myApp();
// we can access the var any position of the var
