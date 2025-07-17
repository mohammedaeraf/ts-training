## ✅ **Programming Test: JavaScript & TypeScript**

### 🔹 **Problem 1 (JavaScript): Process Student Marks**

**Write a function that takes an array of student marks and performs the following:**

1. **Filter** out all marks less than 40 (failing students).
2. **Map** the remaining marks by adding a grace of 5 marks to each.
3. Return the final list of updated marks.

---

**Example Input:**

```js
const marks = [35, 42, 56, 39, 71, 90, 28];
```

**Expected Output:**

```js
[47, 61, 76, 95]
```

---

**Requirements:**

* Use `filter()` to remove failing marks (i.e., marks < 40).
* Use `map()` to add 5 grace marks to each passing mark.
* Do not modify the original array.

---

### 🔹 **Problem 2: TypeScript — Create a Student Type**

**Description:**
Create a `Student` type using `interface` in TypeScript.
Then, write a function `printStudentDetails` that accepts a `Student` object and logs the name and optional grade (if available).

**Requirements:**

* The `Student` interface should have:

  * `name`: string
  * `rollNo`: number
  * `grade?`: string (optional)
* Function should handle presence or absence of `grade`.

**Example:**

```typescript

const s1: Student = { name: "Rahul", rollNo: 101 };
const s2: Student = { name: "Anita", rollNo: 102, grade: "A" };

```

**Expected Output:**

```
Name: Rahul, Roll No: 101  
Name: Anita, Roll No: 102, Grade: A
```

