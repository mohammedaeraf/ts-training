# 📘 Enums, Tuples, Interfaces & Intersections in TypeScript

---

## 🔶 1. Enums (Enumerations)

Enums allow you to define a set of named constants. Useful for representing a group of related values (e.g., status, roles, directions).

### ✅ Syntax:

```ts
enum Status {
  Active,
  Inactive,
  Suspended,
}

let userStatus: Status = Status.Active;
console.log(userStatus); // 0 (index of Active)
```

### ✅ Enum with Custom Values:

```ts
enum Role {
  Admin = "ADMIN",
  User = "USER",
  Guest = "GUEST",
}

let currentRole: Role = Role.Admin;
console.log(currentRole); // "ADMIN"
```

> 🔍 **Why use Enums?**

- Improves code readability and consistency
- Avoids magic strings or arbitrary numbers

---

## 🟪 2. Tuples

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

## 🟩 3. Interfaces

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

## 🧩 4. Intersection Types

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
| **Enum**         | Grouping related constants (roles, statuses, etc.)             |
| **Tuple**        | Fixed-size, ordered collections with different types           |
| **Interface**    | Structuring object types with optional and required properties |
| **Intersection** | Combining multiple types into one                              |

---

## 💻 Practice Suggestions

1. Create an `enum` for PaymentStatus with values like `Pending`, `Paid`, `Failed`
2. Define a `tuple` for coordinates `[latitude: number, longitude: number]`
3. Use `interface` to model a `Book` object
4. Create two types: `Customer` and `BillingInfo` — combine them using intersection
