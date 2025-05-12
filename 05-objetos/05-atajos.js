// Este archivo demuestra diferentes formas de crear objetos en JavaScript, incluyendo:
// - Uso de literales para crear objetos vacíos.
// - Uso del constructor `new Object()` para crear objetos vacíos.
// - Ejemplo de una función constructora personalizada (`Usuario`) para crear instancias de objetos con propiedades predefinidas.

// Atajos para crear objetos, es lo mismo que el constructor pero mas corto

let obj={};
let obj2=new Object(); //objeto vacio 

/*
// Siempre devuelve un objeto, si no se le asigna nada, se devuelve un objeto vacio

    new Array();  //array vacio
    new String(); //string vacio
    new Number(); //numero vacio
    new Boolean(); //booleano vacio
*/

function Usuario(){
    this.name="Chanchito Feliz";
}
let user=new Usuario(); //se crea un objeto de la clase Usuario
console.log(user.constructor);

//------------------------
const s1="1+1";
const s2=new String("1+1"); //objeto string
//console.log(s1,s2);
console.log(eval(s1),eval(s2)); //evalua la cadena como si fuera un codigo javascript

console.log(s1.valueOf()); //para obtener el dato como string real