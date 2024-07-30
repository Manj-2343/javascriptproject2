//get and set Attribute
// ----------------------------------------------------------------
// const link = document.querySelector("a");
// console.log(link.getAttribute("href"));
/**get attribute is used to get the attribute of the html element like anchor tag,input tag etc */
const inputElm = document.querySelector(".form-todo input");
// console.log(inputElm.getAttribute("type"));

//how to change the value of attribute
const link = document.querySelector("a");
console.log(link.getAttribute("href").slice(1));
link.setAttribute("href", "https://codprog.com");
console.log(link.getAttribute("href"));
