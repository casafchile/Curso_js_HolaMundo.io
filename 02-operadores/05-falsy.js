//short-circuit

//falsy
    //Falso
    //false
    //0
    //NaN
    //"" (cadena vacía)
    //null
    //undefined

let nombre="Chanchito Feliz";
let username=nombre||"Anonimo";
console.log(username);

function fn1(){
    console.log("Soy Funcion 1");
    return false;
}
function fn2(){
    console.log("Soy Funcion 2");
    return true;
}
let x=fn1() && fn2(); // Si fn1() es verdadero, se ejecuta fn2()