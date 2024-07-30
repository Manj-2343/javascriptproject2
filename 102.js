//to see the rootElement
const rootNode = document.getRootNode();
const htmlElm = rootNode.childNodes[0];
//1.to see html parent-child relation
// console.log(htmlElm.childNodes); //ans:NodeList(3) [head, text, body]
const headNode = htmlElm.childNodes[0];
const textNode1 = htmlElm.childNodes[1];
const bodyNode = htmlElm.childNodes[2];
// console.log(headNode, textNode1, bodyNode);

//2.to see the child-parent relation
// console.log(headNode.parentNode);

//3.sibling relation
console.log(headNode.nextSibling);
// console.log(textNode1.nextSibling);
//Note:the white space is removed by the browser
/**like:*{
 * whiteSpace:normal;
 * if you want to change it 
 * whiteSpace:pre;
}*/
//4.if you want to remove the text node and get the body node
console.log(headNode.nextElementSibling);
//5. to see how many child node in html(root-element)
console.log(headNode.childNodes);
