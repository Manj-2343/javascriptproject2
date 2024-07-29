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
class Dog extends Animal {
  constructor(name, age, speed) {
    super(name, age);
    this.speed = speed;
  }
  eat() {
    return `modified eat:${this.name} is eating`;
  }
  run() {
    return `${this.name} is running at ${this.speed}`;
  }
}
const tommy = new Dog("tommy", 3, 45);
console.log(tommy.run());
console.log(tommy.eat());
