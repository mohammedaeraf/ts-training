## 🔶 1. Enums (Enumerations)

Enums allow you to define a set of named constants. Useful for representing a group of related values (e.g., status, roles, directions).

### ✅ Syntax:

```ts
enum Status {
  Active,
  Inactive,
  Suspended,
}

let userStatus: Status = Status.Active;
console.log(userStatus); // 0 (index of Active)
```

### ✅ Enum with Custom Values:

```ts
enum Role {
  Admin = "ADMIN",
  User = "USER",
  Guest = "GUEST",
}

let currentRole: Role = Role.Admin;
console.log(currentRole); // "ADMIN"
```

> 🔍 **Why use Enums?**

- Improves code readability and consistency
- Avoids magic strings or arbitrary numbers
