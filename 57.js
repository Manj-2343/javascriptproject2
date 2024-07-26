//asynchronous and asynchronous javascript
// console.log("script started");

// for (let i = 0; i < 10000; i++) {
//   console.log("inside the for loop");
// }
// console.log("script end");
//             setTimeout
console.log("script started");
const id = setTimeout(() => {
  console.log("hello world");
}, 2000);

for (let i = 0; i < 1000; i++) {
  console.log(".......");
}
console.log(id);
console.log("clear time out");
clearTimeout(id);
console.log("script end");
