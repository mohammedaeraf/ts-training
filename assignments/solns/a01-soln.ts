// Q1: Declare variables with appropriate types
let myName: string = "Aeraf";
let myAge: number = 25;
let isStudent: boolean = true;

// Q2: Function with type annotations
function greet(name: string): string {
  return `Hello, ${name}! Welcome to TypeScript.`;
}
console.log(greet("Aeraf"));

// Q3: Array of favorite colors
let colors: string[] = ["Red", "Blue", "Green"];
for (let color of colors) {
  console.log("Favorite Color:", color);
}

// Q4: Factorial
function factorial(n: number): number {
  if (n < 0) {
    console.log("Input must be a non-negative integer.");
  }

  if (n === 0 || n === 1) return 1;

  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }

  return result;
}
// ✅ Test
console.log("Factorial of 5:", factorial(5)); // Output: 120
console.log("Factorial of 0:", factorial(0)); // Output: 1

// Q5: Even Odd Checker
function isEven(num: number): boolean {
  if (!Number.isInteger(num) || num < 0) {
    throw new Error("Input must be a non-negative integer.");
  }

  return num % 2 === 0;
}

// ✅ Test
console.log("Is 7 even?", isEven(7)); // Output: false
console.log("Is 8 even?", isEven(8)); // Output: true

// Q6: Sum of Array
function sumArray(numbers: number[]): number {
  return numbers.reduce((sum, num) => sum + num, 0);
}

// ✅ Test
console.log("Sum of [1, 2, 3, 4, 5]:", sumArray([1, 2, 3, 4, 5])); // Output: 15
console.log("Sum of empty array:", sumArray([])); // Output: 0


// Q6: Union type for userId
let newUserId: number | string;

newUserId = 102;
console.log("User ID (number):", newUserId);

newUserId = "U102";
console.log("User ID (string):", newUserId);

// Q7 (Bonus): Enum for User Status
enum Status {
  Pending,
  Paid,
  Failed,
}

let paymentStatus: Status = Status.Paid;
console.log("Payment Status (index):", paymentStatus); // Output: 1
console.log("Payment Status (name):", Status[paymentStatus]); // Output: Paid

// Q8: Class Car with constructor and method
class Car {
  brand: string;
  model: string;
  year: number;

  constructor(brand: string, model: string, year: number) {
    this.brand = brand;
    this.model = model;
    this.year = year;
  }

  getInfo(): string {
    return `Car: ${this.brand} ${this.model} (${this.year})`;
  }
}

const car1 = new Car("Toyota", "Corolla", 2020);
console.log(car1.getInfo());
