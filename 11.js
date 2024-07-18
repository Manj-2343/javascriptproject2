let temperatureInDegree = +prompt("enter your temperature");
if (temperatureInDegree < 0) {
  console.log("extremely cold in outside");
} else if (temperatureInDegree < 16) {
  console.log("too cold outside");
} else if (temperatureInDegree < 25) {
  console.log("whether is ok");
} else if (temperatureInDegree < 35) {
  console.log("lets go for swim");
} else {
  console.log("too hot");
}
