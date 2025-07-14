type Product = {
  name: string;
  price: number;
  description?: string;
};

let p1: Product = { name: "Laptop", price: 50000 };
let p2: Product = { name: "Phone", price: 30000, description: "Latest model" };
console.log(p1, p2);
