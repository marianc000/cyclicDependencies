
let map = {};

export function emit(event, ...args) {
    map[event].forEach(handler => handler(...args));
}

export function on(event, listener) {
    if (!map[event]) map[event] = [listener];
    else map[event].push(listener);
}
 
