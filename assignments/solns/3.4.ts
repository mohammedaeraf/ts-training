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
  summary: "A journey of self-discovery."
};

const book2: Book = {
  title: "1984",
  author: "George Orwell",
  publishedYear: 1949
};


// Q4. Function to print Book Details
function printBookDetails(book: Book): void {
  console.log(`Title: ${book.title}`);
  console.log(`Author: ${book.author}`);
  console.log(`Published: ${book.publishedYear}`);
  if (book.summary) {
    console.log(`Summary: ${book.summary}`);
  }
  console.log('---------------------------');
}

printBookDetails(book1);
printBookDetails(book2);