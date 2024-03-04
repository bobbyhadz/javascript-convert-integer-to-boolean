// EXAMPLE 1 - Convert an Integer to Boolean in JavaScript

console.log(Boolean(1)); // 👉️ true
console.log(Boolean(0)); // 👉️ false
console.log(Boolean(-0)); // 👉️ false
console.log(Boolean(-1)); // 👉️ true

const num = 1;

const bool = Boolean(num);
console.log(bool); // 👉️ true

// ------------------------------------------------------------------

// // EXAMPLE 2 - Convert an Integer to a Boolean using the double NOT (!!) operator

// console.log(!!1); // 👉️ true
// console.log(!!0); // 👉️ false
// console.log(!!-0); // 👉️ false
// console.log(!!-1); // 👉️ true

// const num = 0;

// const bool = !!num;
// console.log(bool); // 👉️ false

// ------------------------------------------------------------------

// // EXAMPLE 3 - Convert an Integer to a Boolean by comparing it to `0`

// const bool1 = 10 !== 0;
// console.log(bool1); // true

// const bool2 = 0 !== 0;
// console.log(bool2); // 👉️ false
