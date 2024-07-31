//diff between static list and live list
/**querySelectorAll(return nodeList) gives the static list and getElement BySomething(tagname,id,class)(return htmlCollection) gives the live list */
const ul = document.querySelector(".todo-list");
//const listItem = document.querySelectorAll(".todo-list li");
const listItem = document.getElementsByTagName("li");
const sixtLi = document.createElement("li");
sixtLi.textContent = "Item 6";
ul.appendChild(sixtLi);
console.log(listItem); //return NodeList(5) [li, li, li, li, li] not 6
