//promise
console.log("script start");
const bucket = ["coffee", "chips", "vegetable", "salt", "rice"];
const myPromise = new Promise((resolve, reject) => {
  if (
    bucket.includes("vegetable") &&
    bucket.includes("salt") &&
    bucket.includes("rice")
  ) {
    resolve("Fried Rice");
  } else {
    reject("Could not find vegetable");
  }
});
//this  way we create the promise
myPromise
  .then(
    //jab promise resolve hoga
    (myFriedRice) => {
      console.log("lets is eat", myFriedRice);
    }
  )
  .catch((err) => console.log(err));
for (let i = 0; i < 10; i++) {
  console.log(Math.random(), i);
}
console.log("script end");
// this way we can  consume the  promise
