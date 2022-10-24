/* 
    setTimeout doesn't guarantee that code would be invoked after setted duration, it'll be executed when it can:

    setTimeout(() => {
        heavyFn();
    }, 5000); 
*/

// Async cycles with setTimeout & Closures
for (var i = 0; i < 5; i++) {
    setTimeout(() => console.log(i), 0);
}
/* 
    5
    5
    5
    5
    5
*/

// scope of let is in {} block
// for each iteration new i variable is being created
for (let i = 0; i < 5; i++) {
    setTimeout(() => console.log(i), 0);
}
/* 
    1
    2
    3
    4
    5
*/