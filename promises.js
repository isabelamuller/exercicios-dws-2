let promise = new Promise(function(resolve, reject) {

    setTimeout(() => resolve("deu certo"), 2000);
  });

  promise.then(
    result => console.log(result),
    error => console.log(error)
  );

  let promise1 = new Promise(function(resolve, reject) {
    setTimeout(() => reject(new Error("Whoops!")), 3000);
  });
  
  // reject runs the second function in .then
  promise1.then(
    result => console.log(result), // doesn't run
    error => console.log(error) // shows "Error: Whoops!" after 1 second
  );