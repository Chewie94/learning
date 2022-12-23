// declarative - what we want to do, without explaining how to achieve it. Human friendly
// imperative - how we want to do it. Machine friendly
// Many (if not all) declarative APIs have some sort of underlying imperative implementation.
// Benefit of declarative approach is that it's context independent - your code is concerned with what the ultimate goal is rather than the steps it takes to accomplish it.
// Same code can be used in different programs and work just fine: "Table for two please" works everywhere.

// Examples: SQL, HTML, CSS

// Imperative JS:
function double(arr) {
    let results = [];
    for (let i = 0; i < arr.length; i++) {
        results.push(arr[i] * 2);
    } 
    return results;
}

// Declarative JS:
function double(arr) {
    return arr.map((item) => item * 2);
}