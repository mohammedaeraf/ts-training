# 🔹 1. `any` in TypeScript

### 📌 What is `any`?

`any` is a special type that **disables type checking**. A variable of type `any` can hold **any value** (number, string, boolean, object, etc.).

### 📌 Syntax

```ts
let value: any;
```

### 📌 Example

```ts
let data: any;

data = 10;          // number
data = "Hello";     // string
data = true;        // boolean

console.log(data);
```

### 📌 Why use `any`?

* When you don’t know the type beforehand
* While working with **third-party libraries**
* During **migration from JavaScript to TypeScript**

### ⚠️ Problem with `any`

Using `any` removes TypeScript safety.

```ts
let value: any = 10;
value.toUpperCase(); // ❌ Runtime error (number doesn't have this method)
```

### ✅ Best Practice

Avoid `any` as much as possible. Use:

* `unknown` (safer alternative)
* Proper types

---

# 🔹 2. `undefined` and `null`

## 📌 `undefined`

A variable is `undefined` when:

* It is declared but **not assigned a value**

```ts
let x: number;
console.log(x); // undefined
```

## 📌 `null`

`null` is an **intentional empty value** assigned by the developer.

```ts
let y: null = null;
```

---

## 📌 Key Difference

| Feature      | undefined                | null                          |
| ------------ | ------------------------ | ----------------------------- |
| Meaning      | Value not assigned       | Empty value assigned manually |
| Who assigns? | JavaScript automatically | Developer                     |
| Type         | `undefined`              | `null`                        |


# 🔹 3. Optional (`?`) in TypeScript

### 📌 What is Optional?

Optional means a value **may or may not be present**.

Used mainly in:

* Function parameters
* Object properties

---

## 📌 1. Optional Function Parameters

### Syntax

```ts
function greet(name?: string) {
  console.log("Hello " + name);
}
```

### Example

```ts
greet("Ali");   // Hello Ali
greet();        // Hello undefined
```

---

## 📌 Rule

Optional parameters must come **after required parameters**

```ts
function test(a: number, b?: number) {} // ✅
function test(a?: number, b: number) {} // ❌
```

---

## 📌 2. Optional Object Properties

### Syntax

```ts
type User = {
  name: string;
  age?: number;
};
```

### Example

```ts
let user1: User = { name: "John" };            // ✅
let user2: User = { name: "John", age: 25 };   // ✅
```


---

# 🎯 Quick Summary

* `any` → disables type checking (avoid when possible)
* `undefined` → variable declared but not assigned
* `null` → intentional empty value
* `?` → optional values (parameters & properties)


