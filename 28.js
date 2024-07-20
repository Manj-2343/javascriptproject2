// nested destructing
const users = [
  { user_id: 1, firstName: "Manoj", gender: "male" },
  { user_id: 2, firstName: "Mohan", gender: "male" },
  { user_id: 3, firstName: "Madhav", gender: "female" },
];
// const [user1, user2, user3] = users;
const [{ user_id }, { firstName }, { gender }] = users;
console.log(user_id, firstName, gender);
// console.log(user1, user2, user3);
