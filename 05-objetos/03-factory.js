// Sirve para no repetir el código y crear objetos similares
// Factory es una funcion que crea objetos y devuelve el objeto creado

/*
let user = {
    id: 1,
    email: "Felipeeduardo@gmail.com",
    nombre: "Felipe Eduardo",
    direccion: {
        calle: "Calle 123",
        ciudad: "Madrid",
        pais: "España",
    },
    activo:true,
    recuperarClave: function(){
        console.log("Recuperar clave...");
    },
};
*/

function crearUsuario(email, nombre){
    return {
        email, //email: email, //es lo mismo tenemos la propiedad y el valor igual
        nombre,
        activo:true,
        recuperarClave: function(){
            console.log("Recuperar clave...");
        },
    };
}
let user1 = crearUsuario("Felipeeduardo@gmail.com", "Felipe Eduardo");
let user2 = crearUsuario("Juanito@mail.com", "Juanito Perez");
console.log(user1,user2);