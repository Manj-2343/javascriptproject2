//function that  return the promise
function ricePromise() {
  const bucket = ["coffee", "chips", "vegetable", "salt", "rice"];
  return new Promise((resolve, reject) => {
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
}
ricePromise()
  .then(
    //jab promise resolve hoga
    (myFriedRice) => {
      console.log("lets is eat", myFriedRice);
    }
  )
  .catch((err) => console.log(err));
