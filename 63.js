//promise.resolve
//promise chaining
function myPromise() {
  return new Promise((resolve, reject) => {
    resolve("foo");
  });
}
myPromise()
  .then((value) => {
    console.log(value);
    value += "barrr";
    return value;
  })
  .then((value) => console.log(value));
