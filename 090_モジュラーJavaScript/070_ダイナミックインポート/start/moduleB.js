import {publicVal, publicFn } from './moduleA.js';

publicFn();

async function fn() {
  const modules = await import('./moduleA.js');
  modules.publicFn();
}
import('./moduleA.js').then(function(modules) {
  console.log(modules);
  modules.publicFn();
})