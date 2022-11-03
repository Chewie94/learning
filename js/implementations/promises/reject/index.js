// “The Promise.reject() method returns a Promise object that is rejected with a given reason.”

Promise.myReject = function (value) {
    return new Promise((_, reject) => {
      reject(value)
    })
}

Promise.myReject(new Error('fail'))
    .then(() => console.log('Resolved'), (err) => console.log('Rejected', err))
// Rejected Error: fail
//    at <anonymous>:9:18