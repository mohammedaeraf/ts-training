enum Role {
  Admin = "ADMIN",
  User = "USER",
  Guest = "GUEST"
}

let currentRole: Role = Role.Admin;
console.log(currentRole); // "ADMIN"
