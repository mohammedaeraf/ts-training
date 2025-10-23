let x = 10;

x = "john";
console.log(x * 10);

function calculateArea(length, width) {
  return length * width;
}

let area = calculateArea(5, 10);
console.log(area); // Valid usage: Outputs 50

area = calculateArea(5, "10m");
console.log(area);

area = calculateArea(5);
console.log(area); // Error at runtime: Outputs NaN

let fruits = ["apple", "banana", "kiwi"];
fruits.push("mango");
fruits.push(125);
console.log(fruits);
