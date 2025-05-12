function Punto(x, y) {
  this.x = x;
  this.y = y;
  this.dibujar = function () {
    console.log("Dibujando ...");
  }
}

let punto = {z:7};

Punto.call(punto,1,2); //el call es para llamar a una funcion y pasarle un objeto como contexto, el primer parametro 
// es el objeto que se le pasa como contexto, el segundo y tercer parametro son los argumentos que se le pasan a la funcion

//es lo mismo que hacer esto: pero con un []
Punto.apply(punto,[1,2]); //llama a la funcion Punto y le pasa el objeto punto como contexto

console.log(punto); //{z:7, x:1, y:2, dibujar: ƒ}


//NO HACER ESTO, ES UNA MALA PRACTICA
/*
const Point = new Function("x", "y", `
  this.x = x;
  this.y = y;
  this.dibujar = function () {
    console.log("Dibujando ...");
  }
`); //constructor de objetos, se puede usar como una funcion normal o como un constructor

const p = new Point(1, 2); //se crea un objeto de la clase Point
p.dibujar(); //llama a la funcion dibujar del objeto p
*/

