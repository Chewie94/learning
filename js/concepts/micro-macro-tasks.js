// One go-around of the event loop will have exactly one task being processed from the macrotask queue (this queue is simply called the task queue in the WHATWG specification). After this macrotask has finished, all available microtasks will be processed, namely within the same go-around cycle. While these microtasks are processed, they can queue even more microtasks, which will all be run one by one, until the microtask queue is exhausted.

// What are the practical consequences of this?
// If a microtask recursively queues other microtasks, it might take a long time until the next macrotask is processed. This means, you could end up with a blocked UI, or some finished I/O idling in your application.

// However, at least concerning Node.js's process.nextTick function (which queues microtasks), there is an inbuilt protection against such blocking by means of process.maxTickDepth. This value is set to a default of 1000, cutting down further processing of microtasks after this limit is reached which allows the next macrotask to be processed)

// So when to use what?
// Basically, use microtasks when you need to do stuff asynchronously in a synchronous way (i.e. when you would say perform this (micro-)task in the most immediate future). Otherwise, stick to macrotasks.

// Examples
// macrotasks: setTimeout, setInterval, setImmediate, requestAnimationFrame, I/O, UI rendering
// microtasks: process.nextTick, Promises, queueMicrotask, MutationObserver