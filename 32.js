//function inside the function
const app = () => {
  const myFunction = () => {
    console.log("this i smy function");
  };
  const mull = (num1, num2) => {
    return num1 * num2;
  };
  const add = (num1, num2) => num1 + num2;
  console.log("inside the app");
  myFunction();
};
app();
