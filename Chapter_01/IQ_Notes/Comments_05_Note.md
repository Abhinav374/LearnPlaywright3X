# Keywords & Identifiers — From Comments_05.js

Source: `Chapter_03/Comments_05.js`

---

## Key Concept

> Keywords are reserved words in JavaScript that have a predefined meaning to the language engine. They are part of the syntax and **cannot** be used as identifiers (variable names, function names, class names, etc.).

---

## What This Means

| Concept | Can be identifier? | Example |
|---------|-------------------|---------|
| **Keywords** (`let`, `const`, `if`, `return`, `class`, etc.) | ❌ No | `let let = 5;` → Error |
| **Your own names** (`userName`, `myFunction`, `Total`, etc.) | ✅ Yes | `let userName = "Alice";` → Works |

---

## Quick Check

```javascript
// ❌ These will throw SyntaxError
let var = 10;
const return = true;
function if() {}

// ✅ These are valid
let variable = 10;
const returnedValue = true;
function ifCondition() {}
```
