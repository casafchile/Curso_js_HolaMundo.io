function suma(a,b){
    console.log(arguments); //ver todos los datos que se le pasan a la funcion
    return a + b;
}

resultado = suma(5,6,1,2,3);
console.log(resultado); //7
//console.log(suma(5)); 

console.log(typeof suma); //function