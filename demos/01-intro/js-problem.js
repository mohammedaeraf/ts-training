let x = 10;
x = "hello";
console.log(x * 10);

function calculateArea(length, width) {
  return length * width;
}

let area = calculateArea(5, 10);
console.log(area); // Valid usage: Outputs 50

area = calculateArea(5, "10m");
console.log(area); // NaN

area = calculateArea(5);
console.log(area); // Error at runtime: Outputs NaN

let fruits = ["apple", "banana", "mango"];
fruits.push(20);
console.log(fruits);
