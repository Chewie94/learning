// “The Promise.resolve() method “resolves” a given value to a Promise. If the value is a promise, that promise is returned; 
// if the value is a thenable, Promise.resolve() will call the then() method with two callbacks it prepared; 
// otherwise, the returned promise will be fulfilled with the value.”

Promise.myResolve = function (value) {
    // If value is a Promise, just return it directly
    if (value && typeof value === 'object' && (value instanceof Promise)) {
      return value
    }
    // Otherwise, all other cases are wrapped again by Promise 
    return new Promise((resolve) => {
      resolve(value)
    })
  }

  // 1. Non-Promise object, non-thenable object
Promise.myResolve(1).then(console.log) // 1
// 2. Promise object success status
const p2 = new Promise((resolve) => resolve(2))
Promise.myResolve(p2).then(console.log) // 2
// 3. Promise object failure status
const p3 = new Promise((_, reject) => reject('err3'))
Promise.myResolve(p3).catch(console.error) // err3
// 4. thenable object
const p4 = {
  then (resolve) {
    setTimeout(() => resolve(4), 1000)
  }
}
Promise.myResolve(p4).then(console.log) // 4
// 5. nothing is delivered
Promise.myResolve().then(console.log) // undefined