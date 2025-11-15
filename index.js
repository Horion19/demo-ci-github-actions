// Crea el archivo index.js
const fs = require('fs');

function suma(a, b) {
    return a + b;
}

function multiplica(a, b) {
    return a * b;
}

// Solo para ver que corre
console.log("La suma de 2 + 3 es:", suma(2, 3));
console.log("La multiplicación de 2 * 3 es:", multiplica(2, 3));

module.exports = { suma, multiplica };