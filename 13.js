//while loop
// dry->don't repeat your self
let i = 0;
while (i <= 3) {
  console.log(i);
  i++;
}
console.log(`the value of i is ${i}`);
// ex-2
// to get first n natural number
let num = +prompt("enter you number");
let total = 0;
let j = 0;
while (j <= num) {
  total = total + j;
  j++;
}
console.log(total);
