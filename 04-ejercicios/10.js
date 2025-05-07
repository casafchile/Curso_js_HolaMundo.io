//crear un array de longitud N y que sus elementos sean numeros de 1 a N

let longitud = 7;

function crearArray(n){

    //Comprobacion que no sean N°s negativos
    if (n <= 0) {
        return [];
    }

    //metodo for
    let array =[];
    for (let i = 1; i <= n; i++) {
        array.push(i);
    }
    return array;
}
let resultado= crearArray(longitud);
console.log(resultado);