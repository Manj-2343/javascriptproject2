//by using query selector
//it is like the to select the css
const mainHeading = document.querySelector("#main-heading");
const header = document.querySelector(".header");
const navItem = document.querySelector(".navItem"); //it will select the 1st nav item instead of the 3 navitem
//if i want to select the all the 3 navItem then we used the "querySelectorAll"
const navItem1 = document.querySelectorAll(".navItem");
console.log(navItem1);
