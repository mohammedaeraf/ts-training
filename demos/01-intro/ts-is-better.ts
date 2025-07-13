let x: number = 10;
x = "ten";

let y = 20; // type inference
y = "hello";

function calcArea(length: number, breadth: number) : number {
    let area: number = length * breadth;
    return area;
}

let area: boolean = calcArea(4,5);

console.log(calcArea(10,20));
console.log(calcArea(10,"20m"));
console.log(calcArea(10));