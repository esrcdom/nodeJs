//PRINCIPALES DIFERENCIAS


// Node - Backend - Corre en un servidor, NO en browser (front)
console.log('Hola wachin')
// Objeto global- me devuelve un obj global c/ ciertos atributos
//console.log(global);
//modulos para explorar
//commonJs modules en vez de ES6 modules

const os = require('os');
const path = require('path');

console.log(os.type())
console.log(os.version())
console.log(os.homedir())

console.log(__dirname)
console.log(__filename)