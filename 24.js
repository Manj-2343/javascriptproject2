//computed properties
// computed properties means ,we have the key and value but we have to create one object

const key1 = "objKey1";
const key2 = "objKey2";
const value1 = "myvalue1";
const value2 = "myvalue2";
const obj = {
  [key1]: value1,
  [key2]: value2,
};
console.log(obj);
// anathore way
const obj1 = {};
obj1[key1] = value1;
obj1[key2] = value2;
console.log(obj1);
