
import { on, emit } from './eventEmitter.js';
import { SET_A, SET_B } from './events.js';

function setB(val) {
    console.log(">setB", val);
};

on(SET_B, setB);
emit(SET_A, 'b');