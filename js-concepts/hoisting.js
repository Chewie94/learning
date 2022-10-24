// Hoisting - JS default behavior of moving declarations to the top
// works for fn and vars, in case of var - only initialize it without assigning value.
// Eslint: eslint no-use-before-define

console.log(`sumFn(1, 2) => ${sumFn(1, 2)}`); // 3
console.log(`sumVar(1, 2) => ${sumVar(1, 2)}`); // not a fn
console.log(`sumConst(1, 2) => ${sumConst(1, 2)}`); // cannot access before initialization

function sumFn(a, b) { return a + b; }
var sumVar = (a, b) => { return a + b; }
const sumConst = (a, b) => { return a + b; }