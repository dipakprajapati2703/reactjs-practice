# Step 0 — ES6+ JavaScript Essentials (for React)

ES6+ adds language features that modern React uses constantly. Mastering these makes components cleaner, safer, and easier to reason about.

## What You’ll Use

- `let` / `const` (block-scoped declarations; prefer `const`)
- Arrow functions `() => {}` (concise, lexical `this`)
- Template literals `` `Hello ${name}` ``
- Destructuring (objects/arrays)
- Spread & Rest (`...`)
- Default parameters
- Array methods: `map`, `filter`, `reduce`
- ES modules: `import` / `export`
- Promises & `async`/`await`

## Why It Matters in React

- Encourages **immutable updates** (critical for predictable re-renders)
- Keeps components **small and reusable**
- Makes **lists, events, and async effects** straightforward

## Core Rules & Tips

- Prefer **`const`**, use `let` only when you must reassign.
- Never mutate arrays/objects in place when they’re used for UI; **copy then replace** (e.g., `{ ...obj, k: v }`, `[...arr, item]`).
- Use `map` to render lists, `filter` to remove items, `reduce` to aggregate.
- Use modules to keep code **split by responsibility** (helpers vs UI).
- Use `async`/`await` for readability in data fetching and timers.

## Practice Checklist (in this repo)

- Open `/es6-examples` and verify each section’s output.
- Change inputs (numbers/strings/arrays) and confirm the results update.
- Rewrite one or two helpers using **destructuring** and **spread**.

## References (Official / Reputable)

- **MDN** — `let`: <https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/let>  
- **MDN** — `const`: <https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/const>  
- **MDN** — Arrow functions: <https://developer.mozilla.org/docs/Web/JavaScript/Reference/Functions/Arrow_functions>  
- **MDN** — Template literals: <https://developer.mozilla.org/docs/Web/JavaScript/Reference/Template_literals>  
- **MDN** — Destructuring: <https://developer.mozilla.org/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment>  
- **MDN** — Spread syntax: <https://developer.mozilla.org/docs/Web/JavaScript/Reference/Operators/Spread_syntax>  
- **MDN** — Rest parameters: <https://developer.mozilla.org/docs/Web/JavaScript/Reference/Functions/rest_parameters>  
- **MDN** — Default parameters: <https://developer.mozilla.org/docs/Web/JavaScript/Reference/Functions/Default_parameters>  
- **MDN** — Array `map`: <https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array/map>  
- **MDN** — Array `filter`: <https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array/filter>  
- **MDN** — Array `reduce`: <https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce>  
- **MDN** — Modules: <https://developer.mozilla.org/docs/Web/JavaScript/Guide/Modules>  
- **MDN** — Promises & `async/await`: <https://developer.mozilla.org/docs/Learn/JavaScript/Asynchronous/Promises>