const arry = [1, 2, 3, 4, 5];

const result = arry.reduce(function(accu, curr) {
  return accu + curr;
}, 0);

console.log(result);