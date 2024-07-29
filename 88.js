//inheritance
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
class Dog extends Animal {}
// object = instance
const tommy = new Dog("Tommy", 6);
console.log(tommy);
console.log(tommy.eat());
console.log(tommy.isCute());
