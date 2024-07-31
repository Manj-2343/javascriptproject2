// this keyword
const btn = document.querySelector(".btn-headline");
btn.addEventListener("click", () => {
  console.log("you clicked me");
  console.log("value of this");
  console.log(this); //this value will be button when you used normal function
  //but when you used arrow function you set the this value to the window
});
