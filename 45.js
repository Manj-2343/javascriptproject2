// findMethod
// const myArray = ["Hello", "cat", "Dogggy", "Lion", "Bag"];

// const myNewArray = myArray.find((string) => string.length === 6);
// console.log(myNewArray);
const users = [
  { user_Id: 1, userName: "Manoj" },
  { user_Id: 2, userName: "saroj" },
  { user_Id: 3, userName: "ragoj" },
  { user_Id: 4, userName: "Gandhaj" },
  { user_Id: 5, userName: "Sahabag" },
];
const myUser = users.find((user) => user.user_Id === 3);
console.log(myUser);
