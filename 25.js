// const newArray = [..."abc"];
// console.log(newArray);
// ans:['a', 'b', 'c']
const obj1 = {
  key1: "value1",
  key2: "value2",
};
const obj2 = {
  key1: "valueunique",
  key3: "value3",
  key4: "value4",
};
const newObj = { ...obj1, ...obj2, key60: "value69" };
console.log(newObj);
// {key1: 'valueunique', key2: 'value2', key3: 'value3', key4: 'value4', key60: 'value69'}
//convert string to object
// const newObj1 = { ..."string" };
const newObj1 = { ...["string1", "string2"] };

console.log(newObj1);
