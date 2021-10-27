// b.js
import {setA} from './a.js';

export function setB(val) {
    console.log(">setB", val);
};
 
setA('b');