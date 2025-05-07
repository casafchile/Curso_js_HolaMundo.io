//Crear una funcion en la cual se le pase 2 parametros y saber cual de los 2 es el mayor

function cualEsMayor(a,b){
    /*if (a>b){
        console.log("El mayor es: " + a);
    }else{
        console.log("El mayor es: " + b);
    }*/
    return (a>b) ? a : b; // Operador ternario
}
let mayor = cualEsMayor(10,5);
console.log(mayor); 