bar();
foo(); // Cannot access 'foo' before initialization

// Function declarations load before any code is executed while Function expressions load only when the interpreter reaches that line of code.

// Fn declaration:
function bar() { return console.log('bar fn invoked!'); }
// Fn expression:
const foo = () => console.log('foo fn invoked!');