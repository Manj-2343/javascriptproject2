//how to get the dimension(height and width) of the element
const sectionTodo = document.querySelector(".todo-section");
const info = sectionTodo.getBoundingClientRect();
console.log(info);
