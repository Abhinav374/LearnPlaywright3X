# Identifier in JavaScript

An **identifier** is a name given to variables, functions, classes, etc.

---

## Identifier Rules

| # | Rule | Valid | Invalid |
|---|------|-------|---------|
| 1 | Must start with a letter, `_`, or `$` | `var a = 10;`<br>`var $ = 10;`<br>`var _a = 10;` | `var 123abc = 1;` ❌ |
| 2 | Remaining chars can be letters, digits, `_`, or `$` | `var abc = 123;` | `var abc 123 = 1;` ❌ |
| 3 | Cannot use reserved keywords | `let userName;` | `let let = 5;` ❌ |
| 4 | Case-sensitive | `name` and `Name` are different | — |
| 5 | No spaces allowed | `let fullName;` | `let full name;` ❌ |

---

## Naming Conventions

| Convention | Example | Used For |
|------------|---------|----------|
| **camelCase** | `firstName`, `userName`, `totalPrice`, `isLoggedIn` | Variables & functions |
| **PascalCase** | `UserProfile`, `ShoppingCart` | Classes & constructors |
| **snake_case** | `user_name`, `total_price`, `is_logged` | Underscore separated |
| **SCREAMING_SNAKE_CASE** | `MAX_SIZE`, `API_KEY`, `DATABASE_URL` | Constants |
| **Hungarian Notation** | `strName`, `bActive`, `arrItem` | Older style (type prefix) |
