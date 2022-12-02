//PRINCIPALES DIFERENCIAS


// Node - Backend - Corre en un servidor, NO en browser (front)
console.log('Hola wey')
// Objeto global- me devuelve un obj global c/ ciertos atributos
//console.log(global);
//modulos para explorar
//commonJs modules en vez de ES6 modules

const os = require('os');
const path = require('path');
const {adicion, sustraccion, multiplicacion, division} = require('./mat')

console.log(adicion(5, 8))
console.log(sustraccion(10, 3))
console.log(multiplicacion(7, 8))
console.log(division(200, 2))




/*
console.log(os.type())
console.log(os.version())
console.log(os.homedir())

console.log(__dirname)
console.log(__filename)

console.log(path.dirname(__filename))
console.log(path.basename(__filename))
console.log(path.extname(__filename))

console.log(path.parse(__filename))
*/