 
import {on,emit} from './eventEmitter.js';
import {SET_A,SET_B} from './events.js';
 
function setA(val) {
    console.log(">setA", val);
};

on(SET_A,setA);
setTimeout(()=>emit(SET_B,'a'));
 