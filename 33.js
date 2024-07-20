//lexical scope
const myVar = "value1";
function myApp() {
  const myFunction = () => {
    const function2 = () => {
      console.log("inside my function", myVar);
    };
    function2();
  };
  console.log(myVar);
  myFunction();
}
myApp();
