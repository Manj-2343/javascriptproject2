//event object
//by using general function
/**const firstButton = document.querySelector("#one");

firstButton.addEventListener("click", function () {
  console.log(this.textContent); //
});*/

//by Using Arrow function
const firstButton = document.querySelector("#one");

firstButton.addEventListener("click", (e) => {
  //   console.log(e.target.textContent);
  console.log(e.currentTarget.textContent);
});
