// splice method
//start, delete, insert
const myArray = ["item1", "item2", "item3"];
//delete
myArray.splice(1, 1);
console.log(myArray);
//insert
myArray.splice(1, 0, "inserted item4");
console.log(myArray);
