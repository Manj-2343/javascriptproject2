//into to event
//click
//3 way to add event
/**        1st way     */
/* <button class="btn btn-headline" onclick="console.log('you clicked')">
          Learn More
        </button>      */
/**        2nd way     */

/**const btn = document.querySelector(".btn-headline");
// console.dir(btn); to see the btn-obj-property
btn.onclick = function () {
  console.log("you clicked me");
};*/

/**        3rd way     */
//method:addeventListener
const btn = document.querySelector(".btn-headline");
btn.addEventListener("click", () => {
  console.log("you clicked me");
});
