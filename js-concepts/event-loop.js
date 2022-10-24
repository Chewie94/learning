/* 
    JS is single-threaded language - in current moment of time only one task can be executed.
    If task is heavy, we still need to wait until its being executed and during this time interface is blocked
    That's why event loop concept exists in js - run async code in a single thread
    
    Crucial parts of Event loop:
    1. Call stack - fifo. Max size on modern engines around 100k
    2. WEB API - provides event listeners, setTimeout, etc
    3. Callback queue - lifo

    use alert, prompt, confirm - to block code execution
*/

// Sync code:
function firstFn() {
    console.log('log1');
    console.log('log2');
}
function secondFn() {
    console.log('log3');
    firstFn();
}
secondFn();
/*
    log3
    log1
    log2
*/

// Async code
// If users clicks on btn, someFunction is being added to Callback queue and
// its gonna be there until Call Stack is empty - Callback queue tasks always are waiting for Call stack
console.log('start');
// const btn = document.getElementById('btn');

function someFunction(){
    setTimeout(function callback() {
        console.log('INSIDE TIMEOUT')
    }, 3000);

    console.log('INSIDE someFunction');
}

// btn.addEventListener('click', someFunction);

someFunction();

console.log('end');
/* 
    start
    INSIDE someFunction
    end
    INSIDE TIMEOUT
*/