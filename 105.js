//1.add new elements to to the page

//2.innerHtml to add html element
const todoList = document.querySelector(".todo-list");
// console.log(todoList.innerHTML);
// todoList.innerHTML = "<li>New Todo </li>";
todoList.innerHTML += "<li>New Todo </li>";
todoList.innerHTML += "<li>Tech Student</li>";
// console.log(todoList.innerHTML);

//3.when you should use it ,when you should not
/**
 * you do not use the innerHTML to add the new element .
 * you should use inner-html to modify the html element
 */

