/**
 * ES6+ Practice Utilities
 * Each function returns plain data so you can render or console.log safely.
 * Author: Dipak (practice module)
 */

/**
 * Demonstrates `let` and `const` scope & reassignment rules.
 * @returns {{loopSum:number, objA:number, constReassignable:boolean}}
 */
export function demoLetConst() {
  let loopSum = 0;
  for (let i = 0; i < 3; i++) {
    loopSum += i; // 0 + 1 + 2 = 3
  }

  const obj = { a: 1 };
  obj.a = 2; // allowed: mutating properties is fine

  // Correct way: explicitly declare the variable
  const constReassignable = false;

  return { loopSum, objA: obj.a, constReassignable };
}

/**
 * Arrow functions: concise syntax + lexical `this`.
 * @returns {{doubles:number[], sampleSum:number}}
 */
export function demoArrowFunctions() {
  const add = (a, b) => a + b;
  const doubles = [1, 2, 3].map((n) => n * 2);
  const sampleSum = add(2, 3); // 5
  return { doubles, sampleSum };
}

/**
 * Template literals for string interpolation and multi-line strings.
 * @returns {{greeting:string, multiLine:string}}
 */
export function demoTemplateLiterals() {
  const name = "React Learner";
  const greeting = `Hello, ${name}!`;
  const multiLine = `Line 1\nLine 2`;
  return { greeting, multiLine };
}

/**
 * Object & array destructuring.
 * @returns {{firstName:string, second:number, restNumbers:number[]}}
 */
export function demoDestructuring() {
  const user = { firstName: "Dipak", role: "Developer" };
  const { firstName } = user;

  const nums = [10, 20, 30, 40];
  const [first, second, ...restNumbers] = nums;

  // `first` is unused intentionally; keep for learning
  void first;

  return { firstName, second, restNumbers };
}

/**
 * Spread (copy/merge) & Rest (collect).
 * @returns {{merged:{a:number,b:number,c:number}, collected:number[], withExtra:{x:number,y:number,z:number}}}
 */
export function demoSpreadRest() {
  const a = { a: 1 };
  const b = { b: 2 };
  const merged = { ...a, ...b, c: 3 };

  const collect = (...args) => args;
  const collected = collect(1, 2, 3);

  const base = { x: 1, y: 2 };
  const withExtra = { ...base, z: 9 };

  return { merged, collected, withExtra };
}

/**
 * Default parameters.
 * @param {number} a
 * @param {number} [b=10]
 * @returns {{sum:number}}
 */
export function demoDefaultParams(a = 5, b = 10) {
  return { sum: a + b };
}

/**
 * Array methods: map/filter/reduce.
 * @returns {{mapped:number[], filtered:number[], reduced:number}}
 */
export function demoArrayMethods() {
  const arr = [1, 2, 3, 4, 5];
  const mapped = arr.map((n) => n * 2);
  const filtered = arr.filter((n) => n % 2 === 0);
  const reduced = arr.reduce((acc, n) => acc + n, 0);
  return { mapped, filtered, reduced };
}

/**
 * Modules (import/export) are demonstrated by this file itself.
 * This function just returns a note.
 * @returns {{note:string}}
 */
export function demoModules() {
  return { note: "This file uses ES modules via export/import." };
}

/**
 * Promises & async/await without external calls.
 * @returns {Promise<{value:number, label:string}>}
 */
export async function demoAsyncAwait() {
  const wait = (ms) =>
    new Promise((resolve) => setTimeout(resolve, ms));

  await wait(50);
  const value = 42;
  return { value, label: "Answer after async wait" };
}

/**
 * Helper that runs all demos (sync + async) and returns a unified object.
 * @returns {Promise<Record<string, unknown>>}
 */
export async function runAllEs6Demos() {
  const results = {
    letConst: demoLetConst(),
    arrows: demoArrowFunctions(),
    templates: demoTemplateLiterals(),
    destructuring: demoDestructuring(),
    spreadRest: demoSpreadRest(),
    defaultParams: demoDefaultParams(7), // try a custom value
    arrays: demoArrayMethods(),
    modules: demoModules(),
    asyncAwait: await demoAsyncAwait(),
  };
  return results;
}

export default runAllEs6Demos;
