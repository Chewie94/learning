/* 
    JS is single-threaded language - in current moment of time only one task can be executed.
    If task is heavy, we still need to wait until its being executed and during this time interface is blocked
    That's why event loop concept exists in js - run async code in a single thread
    
    Crucial parts of Event loop:
    1. Call stack - lifo, Max size on modern engines around 100k, part of JS Engine
    2. Callback queue - fifo, woudn't execute until Call stack is empty!, part of Event Loop
    3. WEB API - provides event listeners, setTimeout, middleware between Call Stack & Callback queue

    Callback queue in details:
    1. Macrotask queue (queue of events). 
    Macrotask are: timers (setTimeout, setInterval), events (click, img loading, etc), browser stuff (render, io, etc)
    2. Microtask queue (queue of tasks) - first all Microtasks are completed only then Macrotasks queue stars completing its own tasks. 
    Microtasks are: Promises, queueMicrotask, mutatioObserver
    
    The whole picture looks like this:
    1. Call stack is completing tasks.
    2. Microtasks queue is completing tasks.
    3. One Macrotask is completing tasks. If it contains microtasks they're gonna be completed next. 

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

// Async code and promises:
console.log('A');
const myPromise = new Promise((resolve, reject) => {
    console.log('B');
    setTimeout(() => resolve('C'));
    console.log('D');
}).then((value) => console.log(value));
console.log('E');

/* 
    A
    B
    D
    E
    C
*/