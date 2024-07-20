//object inside the array

const users = [
  { user_id: 1, firstName: "Manoj", gender: "male" },
  { user_id: 2, firstName: "Mohan", gender: "male" },
  { user_id: 3, firstName: "Madhav", gender: "male" },
];
for (let user of users) {
  console.log(user.user_id, user.firstName);
}
console.log(users);
