//document.createElement();
//append = appendChild
//prepend
//remove
// const todoList = document.querySelector(".todo-list");
// const newTodoItem = document.createElement("li");
// newTodoItem.textContent = "Tech Students";
// const newTodoItemTech = document.createTextNode("Tech Students");
// newTodoItem.append(newTodoItemTech);
/**use of Append */
// todoList.append(newTodoItem);
/**useOf prepend */
// todoList.prepend(newTodoItem);
// console.log(todoList.children[1]);
/**use of remove */
// todoList.children[0].remove();
// console.log(todoList);

//before and after
/**use of before */
const todoList = document.querySelector(".todo-list");
const newTodoItem = document.createElement("li");
newTodoItem.textContent = "Tech Students";
//before
// todoList.before(newTodoItem);
//after
todoList.after(newTodoItem);
console.log(newTodoItem);
