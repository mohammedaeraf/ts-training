type MyBook = {
  title: string;
  author: string;
  publishedYear: number;
  summary?: string;
};

const bookWithSummary: MyBook = {
  title: "App Development",
  author: "Yaseen",
  publishedYear: 2023,
  summary: "Build Eye Catching Websites",
};

const bookWithoutSummary: MyBook = {
  title: "Web Development",
  author: "Kola",
  publishedYear: 2025,
};

function printBookDetails(book: MyBook): void {
  console.log(`Title: ${book.title}`);
  console.log(`Author: ${book.author}`);
  console.log(`Published Year: ${book.publishedYear}`);

  if (book.summary) {
    console.log(`Summary: ${book.summary}`);
  }
}

printBookDetails(bookWithSummary);

console.log("");

printBookDetails(bookWithoutSummary);

console.log("");

let productId: number | string;

function displayProductId(productId: number | string) {
  if (typeof productId === "number") {
    console.log("Product ID:", productId);
  } else {
    console.log("Product ID:", productId);
  }
}

displayProductId(101);
displayProductId("SKU-2025");