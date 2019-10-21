import Preferential from  './code/Preferential.js';
import Chain from './code/Chain.js'
let preferential = new Preferential();

let full500 = new Chain(preferential.full500);
let full300 = new Chain(preferential.full300);
let full200 = new Chain(preferential.full200);
let normal = new Chain(preferential.normal);
full500.setNext(full300);
full300.setNext(full200);
full200.setNext(normal);
let a = full500.run(preferential,1001);
console.log(a);