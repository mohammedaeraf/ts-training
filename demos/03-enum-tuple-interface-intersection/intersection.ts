type Person = {
  name: string;
  age: number;
};

type Employee = {
  employeeId: string;
  department: string;
};

type EmployeeProfile = Person & Employee;

const emp1: EmployeeProfile = {
  name: "Imran",
  age: 30,
  employeeId: "E123",
  department: "HR",
};

console.log(emp1);
