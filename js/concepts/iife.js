// 1. Closures - scopes of variables are secured to prevent unexpected behaviors + variables can be modified inside of function from the outside
const user = (function() {
    let name ='anonymous';
    return {
      getName: () => name,
      setName: newName => name = newName
    };
  })();
  console.log(user.getName()) // anonymous
  user.setName('Bob');
  console.log(user.getName()); // Bob

  // 2. Alias Global Variables - for example jquery and some another lib that uses '$'
  const safeJquery = (function ($) {
    // You’re safe to use jQuery here
  })(jQuery);

  // 3. Secure Variables Scope - for ES5, what happens in the IIFE scope, stays in the IIFE scope
  (function () {
    var greeting = 'Good morning! How are you today?';
    console.log(greeting); // Good morning! How are you today?
  })();
  console.log(greeting); // error: Uncaught ReferenceError: greeting is not defined

  // 4. Loop Index - Executing asynchronous tasks inside a loop might lead to an unexpected result
  for (var i = 0; i < 3; i++) {
    setTimeout(_ => console.log(`We’re at ${i}`), 100);
  }
  // We’re at 3
  // We’re at 3
  // We’re at 3

  for (var i = 0; i < 3; i++) {
    (function(index) {
      setTimeout(_ => console.log(`We’re at ${index}`), 100);
    })(i);
  }
  // We’re at 0
  // We’re at 1
  // We’re at 2