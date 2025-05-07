//programacion orientada a objetos
//POO o OOP (Object Oriented Programming)
//es una forma de programar que se basa en objetos y clases

let email = "Felipeeduardo@gmail.com";
let nombre = "Felipe Eduardo";
let direccion = {
    calle: "Calle 123",
    ciudad: "Madrid",
    pais: "España",
};

let user = {
    email: email,
    nombre: nombre,
    direccion: direccion,
    activo:true,
    recuperarClave: function(){
        console.log("Recuperar clave...");
    }, //funcion anonima
};
console.log(user);