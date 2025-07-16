let x: number = 10;
x = "hello";

let y = 20; // type inference
// y = true;

function calcArea(length: number, breadth: number): number {
  let area: number = length * breadth;
  return area;
}

let rectArea: number = calcArea(4, 5);
console.log(rectArea);

rectArea = calcArea(10, "20m");

rectArea = calcArea(20);
