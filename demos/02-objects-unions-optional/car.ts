class Car {
  brand: string;
  model: string;
  year: number | string;

  constructor(br: string, mo: string, yr: number) {
    this.brand = br;
    this.model = mo;
    this.year = yr;
  }

  displayDetails(): void {
    console.log(`This car is a ${this.brand} ${this.model} ${this.year}.`); // Log the car details
  }
}

let myCar = new Car("Toyota", "Corolla", 2025);
myCar.displayDetails();

let car2 = new Car("Renault", "Triber", 2024);
car2.displayDetails();
