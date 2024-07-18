//trim();
//toUpperCase()
// to lowerCase()
// slice()
// note :string can't be modify so you can store the modify value in another string
//             trim methode
let firstName = "   Manoj   ";
console.log(firstName.length);
let newString = firstName.trim();
console.log(newString.length);
//               toUpperCase()
let myName = "Manoj";
let myNewName = myName.toUpperCase();
console.log(myNewName);
//               toLowerCase()
let myNameL = "MANOj";
let myNewNameL = myNameL.toLowerCase();
console.log(myNewNameL);
//               Slice()
// here i want start index and end index
let lastName = "Chandan";
let newString1 = lastName.slice(3, 7);
console.log(newString1);
