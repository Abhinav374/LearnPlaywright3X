# Identifier Rules in JavaScript

An **identifier** is the name we give to variables, functions, classes, objects, or labels. JavaScript enforces strict rules for naming identifiers.

---

## Naming Rules

| # | Rule | Valid Example | Invalid Example |
|---|------|---------------|-----------------|
| 1 | **Must start with a letter, `_`, or `$`** | `var a = 10;`<br>`var $ = 10;`<br>`var _a = 10;` | `var 123abc = 1;` ❌ |
| 2 | **Subsequent chars can be letters, digits, `_`, or `$`** | `var abc = 123;`<br>`let user1 = "John";` | `var abc 123 = 1;` ❌ (space not allowed) |
| 3 | **Cannot use a reserved keyword** | `let userName = "John";` | `let let = 5;` ❌<br>`let return = 1;` ❌ |
| 4 | **Case-sensitive** | `let name = "John";`<br>`let Name = "Jane";` ← different identifiers | — |
| 5 | **No spaces allowed** | `let fullName = "John Doe";` | `let full name = "John";` ❌ |

---

## Legal Starting Characters

The first character must be one of these:

- **Letter**: `a-z`, `A-Z`
- **Underscore**: `_`
- **Dollar sign**: `$`

> **Digit check:** `var 123abc = 1;` → ❌ SyntaxError (from `Identifier_Rules _01.js`)

---

## Case Sensitivity

```javascript
var a = 10;   // different from A
var $ = 10;   // valid identifier
var _a = 10;  // valid identifier
var abc = 123; // valid identifier
```

---

## Naming Conventions (from `Identifier_Rules_02.js`)

| Convention | Example | Used For |
|------------|---------|----------|
| **camelCase** | `firstName`, `lastName`, `userName`, `totalPrice`, `isLoggedIn` | Variables & functions (standard in JS) |
| **PascalCase** | `UserProfile`, `ShoppingCart` | Classes & constructors |
| **snake_case** | `user_name`, `total_price`, `is_logged` | Rare in JS; seen in some APIs |
| **SCREAMING_SNAKE_CASE** | `MAX_SIZE`, `API_KEY`, `DATABASE_URL` | True constants |
| **Hungarian Notation** | `strName`, `bActive`, `arrItem` | Older style; prefixes indicate type |

```javascript
// From Identifier_Rules_02.js — naming conventions in action

// 1. camelCase (standard for JS variables and functions)
let userName = 'camelcase';
let totalPrice = 99.99;
let isLoggedIn = true;

// 2. PascalCase (standard for JS classes and constructors)
let UserProfile = 'PascalCase';
let ShoppingCart = 'class name style';

// 3. snake_case (underscore separated)
let user_name = 'snake_case';
let total_price = '49.99';
let is_logged = 'true';

// 4. SCREAMING_SNAKE_CASE (constants)
const MAX_SIZE = 100;
const API_KEY = 'abc123';
const DATABASE_URL = 'LOCALHOST';

// 5. Hungarian Notation (prefix with type — older style)
let strName = 'Abhinav';
let bActive = true;
let arrItem = [];
```
