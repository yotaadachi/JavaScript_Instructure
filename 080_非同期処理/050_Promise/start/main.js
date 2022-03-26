new Promise(function(resolve, reject) {
  console.log('promise');
  resolve('hello');
  //reject('bye');
  setTimeout(function() {
    resolve('hello');
  }, 1000)
}).then(function(data) {
  console.log('then: ' + data);
  //throw new Error();
  return data;
}).then(function(data) {
  console.log('then: ' + data);
  return data;
}).catch(function(data) {
  console.log('catch: ' + data);
}).finally(function(data) {
  console.log('finally: ' + data);
})

console.log('global end');