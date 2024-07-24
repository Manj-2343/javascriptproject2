//callback function
function myFunc2() {
  console.log("Iam from 2nd function");
}

function myFunct(callback) {
  console.log(callback);
  callback();
  console.log("hello I am From 1 st function");
}
myFunct(myFunc2);
