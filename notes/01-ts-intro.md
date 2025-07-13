# 📘 **Introduction to TypeScript**

## ✅ What is TypeScript?

**TypeScript** is a **strongly typed**, **object-oriented**, and **compiled** superset of JavaScript developed by Microsoft.
It adds **static type-checking** to JavaScript and compiles down to plain JavaScript that can run in any browser or JavaScript engine.

---

## 💡 Why Use TypeScript?

| JavaScript Limitation                 | TypeScript Advantage                                   |
| ------------------------------------- | ------------------------------------------------------ |
| No static typing                      | Supports type annotations (e.g., `number`, `string`)   |
| Runtime errors                        | Compile-time checks reduce bugs                        |
| Poor IDE support                      | Rich IntelliSense, auto-completion                     |
| Complex OOP structures hard to manage | Full support for classes, interfaces, access modifiers |
| Difficult to maintain large codebases | TypeScript provides better scalability                 |

---

## 🔧 How to Install TypeScript

### Prerequisite: Node.js

Install from: [https://nodejs.org/](https://nodejs.org/)

### Install TypeScript globally via npm:

```bash
npm install -g typescript
```

### Check the version:

```bash
tsc --version
```

---

## 🧪 Your First TypeScript Program

### 1. Create a file named `hello.ts`:

```ts
let message: string = "Hello, TypeScript!";
console.log(message);
```

### 2. Compile to JavaScript:

```bash
tsc hello.ts
```

This will generate `hello.js`.

### 3. Run the output:

```bash
node hello.js
```

---

## 🧠 TypeScript vs JavaScript

| Feature     | JavaScript     | TypeScript                           |
| ----------- | -------------- | ------------------------------------ |
| Typing      | Dynamic        | Static (optional)                    |
| Compilation | Interpreted    | Compiled                             |
| Tooling     | Basic          | Advanced (IntelliSense, Refactoring) |
| OOP Support | Limited (ES6+) | Full support (Classes, Interfaces)   |

---

## 🔤 Type Annotations Example

```ts
let age: number = 25;
let name: string = "Alice";
let isLoggedIn: boolean = true;

// Inferred type (TS will guess based on value)
let score = 100; // Type is number
```

---

## 🧱 TypeScript Building Blocks

| Concept              | Description                                  |
| -------------------- | -------------------------------------------- |
| **Type Annotations** | Add types to variables and parameters        |
| **Interfaces**       | Describe object shapes                       |
| **Type Aliases**     | Create custom types                          |
| **Classes**          | OOP support with constructors, methods, etc. |
| **Access Modifiers** | `public`, `private`, `protected`, `readonly` |
| **Enums**            | Named constants for related values           |
| **Generics**         | Type-safe reusable components or functions   |

---

## ✅ Summary

* TypeScript = JavaScript + Type Safety + Tooling
* It helps catch errors early and scale projects better
* Compatible with all JavaScript libraries and frameworks
* Used widely in Angular, Node.js, and modern front-end development

---

## 🚀 Next Steps

Start learning core topics:

1. **Basic Types** – number, string, boolean
2. **Functions with Types**
3. **Arrays and Tuples**
4. **Interfaces and Type Aliases**
5. **Classes and Access Modifiers**
6. **Enums and Generics**
