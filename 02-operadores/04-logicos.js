//AND, OR, NOT

// AND (&&) - Conjunción
// Se evalúa como verdadero si ambas expresiones son verdaderas
// Ejemplo:
console.log(true && true); // true
console.log(true && false); // false

let mayor = true;
let suscrito = true;
console.log("Operador and:",mayor && suscrito); // true (ambas son verdaderas)
console.log("Operador or:",mayor || suscrito); // true (al menos una es verdadera)
console.log("Operador not:",!mayor); // false (negación de mayor)

let soloCatalogoInfantil = !mayor;


