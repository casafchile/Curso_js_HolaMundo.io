//las funciones en js tambien son objetos y estas se consideran como objetos de primera clase, es decir, 
// pueden ser asignadas a variables, pasadas como argumentos a otras funciones y devueltas desde otras funciones. 

function Usuario(nombre){
    this.nombre=nombre;
}

console.log(Usuario.name);
console.log(Usuario.length); //cuantos argumentos recibe la funcion

const U=Usuario;
let user=new U("Felipito"); //se crea un objeto de la clase Usuario

console.log(user); //constructor de la funcion


function of(Fn, arg){
    return new Fn(arg); //se crea un objeto de la clase Fn con el argumento arg
}

let user1=of(Usuario,"Felipe"); //se crea un objeto de la clase Usuario con el argumento "Felipito"
console.log(user1); //constructor de la funcion

//se pueden pasar funciones a otras funciones, como argumentos, ademas se puedes retornar funciones desde otras funciones

function returned(){
    return function(){
        console.log("Hola desde la funcion retornada");
    }
}

let saludo=returned(); //se crea un objeto de la clase Usuario con el argumento "Felipito"
saludo(); //constructor de la funcion