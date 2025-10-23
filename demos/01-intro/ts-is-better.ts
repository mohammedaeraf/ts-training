let x: number = 100;

let title: string = "TypeScript is better than JavaScript";

let isAdult: boolean = false;

let isPrime: boolean = false;

let deliveryCost: number = 0;

if(isPrime) {
  deliveryCost = 0;
}
else {
  deliveryCost = 50;
}
// x = "hello";

let y:number = 20.5; // type inference
y = "Abdullaah";

let isNew = true;

function calcArea(length: number, breadth: number): number {
  let area: number = length * breadth;
  return area;
}

let area: number = calcArea(4, 5);
console.log(area);

area = calcArea(10, "20m");

area = calcArea(10);
