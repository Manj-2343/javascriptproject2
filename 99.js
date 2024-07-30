//loop for html collection and node list
// array like object =>indexing,lengthProperty
// now for htmlCollection
// let navItems = document.getElementsByTagName("a"); //return htmlCollection
// console.log(navItems);
//simple for loop
//for of loop
//forEach loop
/**Note: we can't use forEach method to iterate through HTMLCollection */
//tradition for loop
/**for (let i = 0; i < navItems.length; i++) {
  //   console.log(navItems[i]);
  const navItem = navItems[i];
  navItem.style.color = "#fff";
  navItem.style.backgroundColor = "green";
  navItem.style.fontWeight = "bold";
}*/
//for of loop

/***for (let navItem of navItems) {
  //   console.log(navItem);
  navItem.style.color = "red";
  navItem.style.backgroundColor = "white";
  navItem.style.fontWeight = "500";
}
*/
//for each
/**navItems = Array.from(navItems); //convert html collection to array
console.log(navItems);
navItems.forEach((navItem) => {
  navItem.style.color = "red";
  navItem.style.backgroundColor = "white";
  navItem.style.fontWeight = "500";
});*/
//querySelectorAll
// const navItems = document.querySelectorAll(".navItem"); // return nodeList
// console.log(navItems[2]);
//now for nodeList
let navItems = document.querySelectorAll("a");
// console.log(navItems); //return nodeList
// Note:In node list we can apply all the loop
//tradition for loop
/**for (let i = 0; i < navItems.length; i++) {
  //   console.log(navItems[i]);
  navItems[i].style.color = "red";
  navItems[i].style.backgroundColor = "white";
  navItems[i].style.fontWeight = "500";
}*/
//for of loop
/**for (let navItem of navItems) {
    //   console.log(navItem);
    navItem.style.color = "red";
    navItem.style.backgroundColor = "white";
    navItem.style.fontWeight = "500";
  }*/
//for each
/**navItems.forEach((navItem) => {
  console.log(navItem);
  navItem.style.color = "red";
  navItem.style.backgroundColor = "white";
  navItem.style.fontWeight = "500";
});*/
