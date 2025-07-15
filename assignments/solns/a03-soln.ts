// Q1. Enum: PaymentStatus
enum PaymentStatus {
  Pending,
  Completed,
  Failed,
}

let status: PaymentStatus = PaymentStatus.Completed;
console.log("Payment Status:", status); // Output: 1
console.log("Payment Status (Name):", PaymentStatus[status]); // Output: Completed

// Q2. Tuple: Location
let location: [number, number] = [12.97, 77.59];
console.log("Latitude:", location[0], "Longitude:", location[1]);

// Q3. Interface: Book
interface Book {
  title: string;
  author: string;
  publishedYear: number;
  summary?: string; // Optional
}

const book1: Book = {
  title: "The Alchemist",
  author: "Paulo Coelho",
  publishedYear: 1988,
  summary: "A journey of self-discovery.",
};

const book2: Book = {
  title: "1984",
  author: "George Orwell",
  publishedYear: 1949,
};

// Q4. Function to print Book Details
function printBookDetails(book: Book): void {
  console.log(`Title: ${book.title}`);
  console.log(`Author: ${book.author}`);
  console.log(`Published: ${book.publishedYear}`);
  if (book.summary) {
    console.log(`Summary: ${book.summary}`);
  }
  console.log("---------------------------");
}

printBookDetails(book1);
printBookDetails(book2);

// Q5. Intersection Types
type Customer = {
  name: string;
  email: string;
};

type BillingDetails = {
  cardNumber: string;
  expiryDate: string;
};

type BillingCustomer = Customer & BillingDetails;

const customer1: BillingCustomer = {
  name: "Ayesha",
  email: "ayesha@example.com",
  cardNumber: "1234-5678-9012-3456",
  expiryDate: "12/26",
};

console.log("Customer Name:", customer1.name);
console.log("Card Number:", customer1.cardNumber);
