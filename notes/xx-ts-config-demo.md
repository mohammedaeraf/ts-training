## ✅ **Demo: Configuring TypeScript Using `tsconfig.json`**

### 🎯 **Objective:**

Set up a TypeScript project using `tsconfig.json` and compile it with the `tsc` command.

---

## 🛠️ **Step-by-Step Instructions**

### 1️⃣ **Create a Project Folder**

```bash
mkdir ts-demo
cd ts-demo
```

---

### 2️⃣ **Initialize an Empty TypeScript Project**

```bash
tsc --init
```

✅ This creates a `tsconfig.json` file with many settings (most commented out).

---

### 3️⃣ **Open `tsconfig.json` and Set Some Basic Options**

Here's a simplified version to use for beginners:

```json
{
  "compilerOptions": {
    "target": "ES6",                     
    "module": "commonjs",                
    "rootDir": "./src",                  
    "outDir": "./dist",                  
    "strict": true,                      
    "esModuleInterop": true              
  }
}
```

> 🧠 What do these do?

* `target`: JS version to compile to (ES6)
* `module`: Module system (used by Node.js)
* `rootDir`: Where TypeScript source files are
* `outDir`: Where compiled JavaScript goes
* `strict`: Enables strict type checking
* `esModuleInterop`: Allows default imports from CommonJS

---

### 4️⃣ **Create Folders and Files**

```bash
mkdir src
```

Inside `src`, create a file named `app.ts`:

```ts
// src/app.ts
function greet(name: string): string {
  return `Hello, ${name}!`;
}

console.log(greet("TypeScript User"));
```

---

### 5️⃣ **Compile with `tsc`**

```bash
tsc
```

✅ This compiles `src/app.ts` to `dist/app.js`

---

### 6️⃣ **Run the Output JavaScript**

```bash
node dist/app.js
```

🖨️ Output:

```
Hello, TypeScript User!
```

---

## 📁 Project Structure

```
ts-demo/
├── dist/
│   └── app.js
├── src/
│   └── app.ts
└── tsconfig.json
```

---

## ✅ Summary

| Step | Description                     |
| ---- | ------------------------------- |
| 1    | Created project folder          |
| 2    | Initialized TypeScript config   |
| 3    | Edited compiler options         |
| 4    | Added simple `.ts` file         |
| 5    | Compiled with `tsc`             |
| 6    | Ran output JavaScript with Node |
