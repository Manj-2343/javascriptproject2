//param destructuring
//object
//react
const person = {
  firstName: "Harsit",
  gender: "male",
};
// function printDeatail(obj) {
//   console.log(obj.firstName);
//   console.log(obj.gender);
// }

// printDeatail(person);
function printDetails({ firstName, gender }) {
  console.log(firstName);
  console.log(gender);
}
printDetails(person);
