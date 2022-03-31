const wm = new WeakMap();

const o = {};
wm.set(o, 'value1');

console.log(wm.get(o));
console.log(wm.has(o));
console.log(wm.delete(o));
console.log(wm.get(o));

