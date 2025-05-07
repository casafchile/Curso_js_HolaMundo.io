//Crear una calculadora de precios que reciba un precio y un impuesto y devuelva el precio total con el impuesto incluido.

function PrecioCompleto(precio,impuesto){
/*
    let precioConImpuesto=precio+(precio*impuesto)
    return console.log("$"+precioConImpuesto);
*/
    return precio+(precio*impuesto);
}
let resultado=PrecioCompleto(19.90,0.15);
console.log(resultado);