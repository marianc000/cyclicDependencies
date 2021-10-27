// a.js
import { setB } from './b.js';

export function setA(val) {
    console.log(">setA", val);
};

setB('a');
