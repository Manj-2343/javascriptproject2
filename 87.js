//ex of class
class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  eat() {
    return `${this.name} is eating`;
  }
  isSuperCute() {
    return this.age <= 1;
  }
  isCute() {
    return true;
  }
}
const animal = new Animal("tom", 2);
// console.log(animal);
// console.log(animal.eat());
// console.log(animal.isSuperCute());
// console.log(animal.isCute());

class Dog {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  eat() {
    return `${this.name} is eating`;
  }
  isSuperCute() {
    return this.age <= 1;
  }
  isCute() {
    return true;
  }
}
const tommy = new Dog("tommy", 3);
// console.log(tommy);
// console.log(tommy.eat());
