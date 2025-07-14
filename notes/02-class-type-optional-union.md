# 📘 **Classes, Object Types, Optional & Union Types in TypeScript**

---

## 🧱 1. Class in TypeScript

A **class** is a blueprint to create objects with specific structure and behavior.

### ✅ Syntax:

```ts
class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  greet(): void {
    console.log(
      `Hello, my name is ${this.name} and I'm ${this.age} years old.`
    );
  }
}

const p1 = new Person("Ali", 25);
p1.greet(); // Output: Hello, my name is Ali and I'm 25 years old.
```

> 🔍 **Explanation**:

- `constructor` is called when object is created.
- `greet()` is a method of the class.
- `p1` is an object (instance) of `Person`.

---

## 📦 2. Object Types

In TypeScript, you can define the **shape of an object** using object type syntax or a type alias.

### ✅ Object Type Example:

```ts
let student: { name: string; age: number; isEnrolled: boolean } = {
  name: "Sara",
  age: 22,
  isEnrolled: true,
};
```

### ✅ With `type` alias:

```ts
type Student = {
  name: string;
  age: number;
  isEnrolled: boolean;
};

const s1: Student = {
  name: "Rahul",
  age: 21,
  isEnrolled: true,
};
```

> 🔍 **Why use it?**: Reuse the structure, enforce consistency, and get IntelliSense in IDEs.

---

## ❓ 3. Optional Properties

Use `?` to indicate that a property **may or may not** be present.

### ✅ Example:

```ts
type Product = {
  name: string;
  price: number;
  description?: string; // Optional
};

const p1: Product = { name: "Laptop", price: 50000 };
const p2: Product = {
  name: "Phone",
  price: 30000,
  description: "Latest model",
};
```

> 🔍 **Note**: When using optional props, always check for existence before using:

```ts
function printDescription(product: Product) {
  if (product.description) {
    console.log(product.description);
  }
}
```

---

## 🔗 4. Union Types

A **union type** allows a variable to hold more than one type.

### ✅ Example:

```ts
let id: number | string;

id = 101;
id = "A101";
// id = true; ❌ Error
```

> 🔍 Use **type narrowing** to handle different types:

```ts
function printId(id: number | string) {
  if (typeof id === "number") {
    console.log("Numeric ID:", id);
  } else {
    console.log("String ID:", id);
  }
}

printId(100);
printId("EMP100");
```

---

## 🧠 Recap

| Concept       | Use Case                                             |
| ------------- | ---------------------------------------------------- |
| `class`       | Define structure and behavior of real-world entities |
| `object type` | Create variables with defined shape and fields       |
| `optional`    | Add flexibility by allowing missing properties       |
| `union`       | Accept multiple types safely and explicitly          |

---

## 🚀 Try it Yourself!

Use these topics to solve problems like:

- Creating a `Vehicle` class
- Defining a `Book` type with an optional `summary`
- Writing a function that takes a value which could be `number | string`
