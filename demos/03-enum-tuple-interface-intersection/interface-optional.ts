interface Product {
  name: string;
  price: number;
  description?: string; // Optional
}

const p1: Product = {
  name: "Phone",
  price: 30000,
};

console.log(p1);
