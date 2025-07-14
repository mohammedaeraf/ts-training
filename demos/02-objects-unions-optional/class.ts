class Person {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  sayHello(): void {
    console.log("Hi, my name is " + this.name);
  }
}

let p = new Person("Fatima");
p.sayHello();
