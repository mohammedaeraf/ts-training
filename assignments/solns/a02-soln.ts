// Q1: Define a type alias for Book
type Book = {
  title: string;
  author: string;
  publishedYear: number;
  summary?: string; // Optional
};

const book1: Book = {
  title: "The Alchemist",
  author: "Paulo Coelho",
  publishedYear: 1988,
  summary: "A journey of personal transformation.",
};

const book2: Book = {
  title: "1984",
  author: "George Orwell",
  publishedYear: 1949,
};


// Q2: Function to print Book Details
function printBookDetails(book: Book): void {
  console.log("Title:", book.title);
  console.log("Author:", book.author);
  console.log("Published Year:", book.publishedYear);
  if (book.summary) {
    console.log("Summary:", book.summary);
  }
  console.log("--------------------------");
}

printBookDetails(book1);
printBookDetails(book2);


// Q3: Union type for userId
let userIdentifier: number | string;

userIdentifier = 456;
console.log("User Identifier (number):", userIdentifier);

userIdentifier = "EMP789";
console.log("User Identifier (string):", userIdentifier);


// Q4: Class Car with constructor and method
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

const myCar = new Car("Toyota", "Camry", 2022);
console.log(myCar.getInfo());


// Q5: Bonus - Class Employee with optional phone
class Employee {
  name: string;
  role: string;
  phone?: string;

  constructor(name: string, role: string, phone?: string) {
    this.name = name;
    this.role = role;
    this.phone = phone;
  }

  contactInfo(): void {
    console.log(`Employee: ${this.name}, Role: ${this.role}`);
    if (this.phone) {
      console.log(`Phone: ${this.phone}`);
    } else {
      console.log("Phone: Not Provided");
    }
  }
}

const emp1 = new Employee("Zara", "Manager", "9876543210");
const emp2 = new Employee("Ayaan", "Developer");

emp1.contactInfo();
emp2.contactInfo();