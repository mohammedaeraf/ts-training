function printTable(n: number): void {
  for (let i = 1; i <= 10; i++) {
    let result = n * i;
    console.log(n + " x " + i + " = " + result);
  }
}
printTable(5);
