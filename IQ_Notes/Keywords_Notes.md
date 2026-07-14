# JavaScript Keywords

**Keywords** are reserved words in JavaScript that have a predefined meaning to the language engine. They are part of the syntax and **cannot** be used as identifiers (variable names, function names, class names, etc.).

---

## Complete List of JavaScript Keywords (ES2024+)

| # | Keyword | Category | Purpose | Example |
|---|---------|----------|---------|---------|
| 1 | `await` | Async | Waits for a Promise to resolve | `const data = await fetch(url);` |
| 2 | `break` | Control Flow | Exits a loop or `switch` block | `if (i === 5) break;` |
| 3 | `case` | Control Flow | Marks a branch in `switch` | `case 10: console.log('ten');` |
| 4 | `catch` | Error Handling | Catches exceptions in `try` | `catch (err) { console.log(err); }` |
| 5 | `class` | OOP | Declares a class | `class Rectangle { ... }` |
| 6 | `const` | Declaration | Declares a block-scoped constant | `const pi = 3.14159;` |
| 7 | `continue` | Control Flow | Skips to the next loop iteration | `if (x % 2 === 0) continue;` |
| 8 | `debugger` | Debugging | Invokes debugger if available | `debugger;` |
| 9 | `default` | Control Flow | Default branch in `switch` or `export` | `default: console.log('none');` |
| 10 | `delete` | Operator | Deletes an object property | `delete obj.prop;` |
| 11 | `do` | Control Flow | Creates a `do-while` loop | `do { ... } while (x > 0);` |
| 12 | `else` | Control Flow | Alternate branch for `if` | `if (a) { ... } else { ... }` |
| 13 | `export` | Module | Exports values from a module | `export const name = 'JS';` |
| 14 | `extends` | OOP | Creates a child class | `class Dog extends Animal { ... }` |
| 15 | `finally` | Error Handling | Always runs after `try/catch` | `finally { cleanup(); }` |
| 16 | `for` | Control Flow | Creates a loop | `for (let i = 0; i < 5; i++)` |
| 17 | `function` | Declaration | Declares a function | `function add(a, b) { return a + b; }` |
| 18 | `if` | Control Flow | Conditional execution | `if (age >= 18) { ... }` |
| 19 | `import` | Module | Imports values from a module | `import fs from 'fs';` |
| 20 | `in` | Operator | Checks if property exists in object | `'key' in obj` |
| 21 | `instanceof` | Operator | Tests object type at runtime | `arr instanceof Array` |
| 22 | `let` | Declaration | Declares a block-scoped variable | `let count = 0;` |
| 23 | `new` | Operator | Creates an instance of an object | `const d = new Date();` |
| 24 | `of` | Control Flow | Used in `for...of` loops | `for (val of arr) { ... }` |
| 25 | `return` | Control Flow | Returns a value from a function | `return result;` |
| 26 | `super` | OOP | References the parent class | `super(props);` |
| 27 | `switch` | Control Flow | Evaluates multiple conditions | `switch (day) { ... }` |
| 28 | `this` | Context | Refers to the current execution context | `this.name = 'John';` |
| 29 | `throw` | Error Handling | Throws a custom error | `throw new Error('fail');` |
| 30 | `try` | Error Handling | Wraps code that may throw | `try { riskyOp(); }` |
| 31 | `typeof` | Operator | Returns the type as a string | `typeof 'hello' // 'string'` |
| 32 | `var` | Declaration | Declares a function-scoped variable | `var x = 10;` |
| 33 | `void` | Operator | Evaluates expression & returns `undefined` | `void (0) // undefined` |
| 34 | `while` | Control Flow | Creates a conditional loop | `while (i < 10) { i++; }` |
| 35 | `with` | Scope | Extends the scope chain | `with (obj) { ... }` (**deprecated**) |
| 36 | `yield` | Generator | Pauses/resumes a generator function | `yield value;` |

---

## Reserved Literals (Also Keywords)

These are literal values that are reserved and can't be used as identifiers:

| Keyword | Type | Purpose | Example |
|---------|------|---------|---------|
| `null` | Null | Represents an intentional absence of value | `let x = null;` |
| `true` | Boolean | Represents logical true | `let flag = true;` |
| `false` | Boolean | Represents logical false | `let flag = false;` |

---

## Future Reserved Keywords

These are reserved for potential future use (especially in strict mode):

- `enum`

These were reserved in older specs and are reserved in strict mode:

- `implements`, `interface`, `package`, `private`, `protected`, `public`

---

## Key Rules

1. **Cannot use keywords as variable/function names:** `let var = 5;` → ❌ SyntaxError
2. **Case-sensitive:** `typeof` is a keyword, `Typeof` is a valid identifier
3. **Some keywords are contextual:** `await` is only a keyword inside `async` functions; `of` is only special in `for...of`
4. **`with` is deprecated** — avoid using it in modern JavaScript

---

## Example from This Chapter

```javascript
// Keywords in action (from Chapter 1 concepts)
const browser = await chromium.launch();   // const, await
const page = await browser.newPage();
try {                                       // try
    await page.goto('https://example.com');
    const title = await page.title();
    console.log(title);
} catch (error) {                           // catch
    console.error('Failed:', error.message);
} finally {                                 // finally
    await browser.close();
}
```

> **Keywords** used above: `const`, `await`, `try`, `catch`, `finally` — none of these can be used as variable names.
