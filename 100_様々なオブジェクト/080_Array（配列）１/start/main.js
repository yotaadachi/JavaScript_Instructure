const arry = [1,2,3,4,5];
//const arry2 = arry.concat([6,7,8]);
const arry2 = [0, ...arry, 6,7,8]
arry.push(6);
const result = arry.splice(0, 1);
console.log(result);
console.log(arry2);