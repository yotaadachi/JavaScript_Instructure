function a() {
  console.log('called');
}

a();

// 即時関数
(function() {
  console.log('called')
})();

let c = (function() {
  console.log('called');

  let privateVal = 0;
  let publicVal = 10;

  function privateFn() {
    console.log('privateFn is called');
  }
  function publicFn() {
    console.log('publicFn is called');
  }
  return {
    publicVal,
    publicFn
  };
})()

c.publicFn();
c.publicVal;

console.log(c);