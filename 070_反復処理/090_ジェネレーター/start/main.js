// function* gen() {
//   yield 1;
//   yield 2;
//   return 3;
// }

// const it = gen();
// console.log(it.next())
// console.log(it.next())
// console.log(it.next())
// console.log(it.next())
// console.log(it.next())

// function genIterator(max = 10) {
//   let i = 0;

//   return {
//     next: function() {
//       if(i > max) {
//         return {
//           done: true
//         }
//       } else {
//         return {
//           done: false,
//           value: i++
//         }
//       }
//     }
//   }
// }

function* genIterator(max = 10) {
  let i = 0;

  while(i < max) {
    yield i++;
  }
  return;
}

const it = genIterator();

let a = it.next();
while(!a.done) {
  console.log(a.value);
  a = it.next();
}

const obj = {
  [Symbol.iterator]: genIterator
}

for(let i of obj) {
  console.log(i)
}