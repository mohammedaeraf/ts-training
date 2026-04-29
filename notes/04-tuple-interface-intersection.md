# 📘 Tuples, Interfaces & Intersections in TypeScript

## 🟪 1. Tuples

A **tuple** is a fixed-length array where each element can have a different type.

### ✅ Example:

```ts
let user: [number, string] = [1, "Alice"];

console.log(user[0]); // 1
console.log(user[1]); // "Alice"
```

> 🔍 Use Case:

- Storing ordered and mixed-type data, like `[id, name]`, `[lat, long]`

---

### ✅ Tuple with Optional Elements:

```ts
let person: [number, string, string?] = [101, "Ali"];
```

---

## 🟩 2. Interfaces

Interfaces define the **structure of an object** — what properties and methods it should have.

### ✅ Basic Interface:

```ts
interface Student {
  id: number;
  name: string;
  course: string;
}

const s1: Student = {
  id: 1,
  name: "Ayesha",
  course: "TypeScript",
};
```

---

### ✅ Optional Properties:

```ts
interface Product {
  name: string;
  price: number;
  description?: string; // Optional
}

const p1: Product = {
  name: "Phone",
  price: 30000,
};
```

> 🔍 Use Case:

- Interfaces make code predictable, scalable, and IDE-friendly.

---

## 🧩 3. Intersection Types

Use **intersection (`&`)** when an object needs to satisfy **multiple types** at once.

### ✅ Example:

```ts
type Person = {
  name: string;
  age: number;
};

type Employee = {
  employeeId: string;
  department: string;
};

type EmployeeProfile = Person & Employee;

const emp1: EmployeeProfile = {
  name: "Imran",
  age: 30,
  employeeId: "E123",
  department: "HR",
};
```

> 🔍 Use Case:

- Merging two object types like `User` + `Admin`, or API response from two modules

---

## ✅ Summary

| Feature          | Use For                                                        |
| ---------------- | -------------------------------------------------------------- |
| **Tuple**        | Fixed-size, ordered collections with different types           |
| **Interface**    | Structuring object types with optional and required properties |
| **Intersection** | Combining multiple types into one                              |

---

## 💻 Practice

1. Define a `tuple` for coordinates `[latitude: number, longitude: number]`
2. Use `interface` to model a `Book` object
3. Create two types: `Customer` and `BillingInfo` — combine them using intersection
