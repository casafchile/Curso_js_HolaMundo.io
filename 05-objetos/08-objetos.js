/*
primitivos-> se copian
Referencias-> se comparten
// objetos, array, funciones
*/

//Se cambia en uno pero en el otro no
/*
let a =1;
let b =a; //asignacion por valor

b++; //incrementa b, pero no a
console.log(a,b); //1 2
*/

//Se mantienen los dos iguales si se cambia uno
/*
let a = {};
let b = a; //asignacion por referencia
b.prop=1; //se le asigna una propiedad al objeto b, pero como a y b son el mismo objeto, se le asigna a ambos
console.log(a,b); //{prop:1} {prop:1}
*/

//Ahora con funciones

//el n lo toma como parametro diferente a A por lo cual no aumenta el valor de 1
let a = 1;
function suma(n){
    n++;
}
suma(a);
console.log(a); //1, no cambia porque se pasa por valor

//ahora con objetos, se pasa por referencia
let b = {prop : 1};
function suma2(n){
    n.prop++; //aumenta el valor de n, pero no de b
}
suma2(b);
console.log(b); //{prop:2}, cambia porque se pasa por referencia
