const obj1 = {
  key1: "value1",
  key2: "value2",
};
// const obj2 = {
//   key3: "value3",
// };
//here the problem is the i want to create the relation between the obj1 and  obj2
//in such a way that they can share the information
// 1. to crate  link between the obj1 and obj2
const obj2 = Object.create(obj1); //this swill return the newArray
// 2. set the key and value to obj2
obj2.key3 = "value3";
// if i pass the key 2 in the obj 2
obj2.key2 = "unique";
console.log(obj2);
// summary =>key1: "value1",key2: "value2"will be present in the obj1
//and key1: "value1",key2: "value2" will be present inside the [[Prototype]]
//if key is not present inside the object 2 it will search to its prototype .
//--proto-- = [[prototype]] is same.
//but the prototype is different
console.log(obj2, __proto__);
// ans:key1: "value1",key2: "value2" means obj1
