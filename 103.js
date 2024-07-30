//if you want to reach to the div

/**const h1 = document.getElementsByTagName("h1"); //it return html collection
const h1ParentNode = h1[0].parentNode;
h1ParentNode.style.color = "red";
h1ParentNode.style.backgroundColor = "black";*/

//if you want to reach the body
// const h1 = document.getElementsByTagName("h1");
// const body = h1[0].parentNode.parentNode;
// body.style.color = "red";
// body.style.backgroundColor = "green";

//if you want to select the body
// const body = document.body;
// console.log(body);

//1.the use of children by using this you can access the only element and it avoid the newLine space
const container = document.querySelector(".container");
console.log(container.children);
