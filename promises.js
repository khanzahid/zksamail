const promise = new Promise((resolve, reject) => {
  x = 1;
  y = 2;
  if (x == y) {
    resolve();
  } else {
    reject();
  }
});

promise.then(() => console.log("success")).catch(() => console.log("error"));
//console.log("promise", promise);
