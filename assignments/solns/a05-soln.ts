let geoLocation: [number, number] = [1.111111, 3.333333];
console.log(`Latitude: ${geoLocation[0]}, Longitude: ${geoLocation[1]}`);

console.log("");

interface MyInterBook {
  title: string;
  author: string;
  publishedYear: number;
  summary?: string;
}

const bookInterWithSummary: MyInterBook = {
  title: "App Development",
  author: "Yaseen",
  publishedYear: 2023,
  summary: "Build Eye Catching Websites",
};

const bookInterWithoutSummary: MyInterBook = {
  title: "Web Development",
  author: "Kola",
  publishedYear: 2025,
};

function printBookDetails(book: MyInterBook): void {
  console.log(`Title: ${book.title}`);
  console.log(`Author: ${book.author}`);
  console.log(`Published Year: ${book.publishedYear}`);

  if (book.summary) {
    console.log(`Summary: ${book.summary}`);
  }
}

printBookDetails(bookInterWithSummary);

console.log("");

printBookDetails(bookInterWithoutSummary);

console.log("");

type Customer = {
  name: string;
  email: string;
};

type BillingDetails = {
  cardNumber: string;
  expiryDate: string;
};

type BillingCustomer = Customer & BillingDetails;

const cus_1: BillingCustomer = {
  name: "Yaseen Kola",
  email: "yaseenkola@gmail.com",
  cardNumber: "4242 4242 4242 4242",
  expiryDate: "03-05-2027",
};

console.log(`Name: ${cus_1.name}`);
console.log(`Email: ${cus_1.email}`);
console.log(`Card Number: ${cus_1.cardNumber}`);
console.log(`Card Expiry Date: ${cus_1.expiryDate}`);