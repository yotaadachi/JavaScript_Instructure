// let a = 0;
// console.log(a);

// let b = ++a;
// console.log(a, b)

function fn() {
  let a = 0;
  return a++
}

console.log(!fn() * 5)