let x = 10;
x = "hello";
console.log(x * 10);

function calculateArea(length, width) {
  return length * width;
}

console.log(calculateArea(5, 10)); // Valid usage: Outputs 50
console.log(calculateArea(5, "10m"));  // NaN
console.log(calculateArea(5)); // Error at runtime: Outputs NaN
