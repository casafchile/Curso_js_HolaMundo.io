//https://www.youtube.com/watch?v=QoC4RxNIs5M&t=5s
//1.00.18

//Es una estructura de datos que permite almacenar un conjunto de propiedades y métodos
//Un objeto es una colección de propiedades, donde cada propiedad tiene un nombre y un valor

//Personaje de TV
let personaje = {
    nombre: "Homer Simpson",
    edad: 39,
    ocupacion: "Trabajador de planta nuclear",
    habilidades: ["Comer donas", "Ver TV", "Trabajar"],
    direccion: {
        calle: "Evergreen Terrace",
        numero: 742,
        ciudad: "Springfield"
    },
};
console.log(personaje);
console.log(personaje.nombre); //Homer Simpson
console.log(personaje["ocupacion"]); //Trabajador de planta nuclear

//Cambiar propiedades de un objeto
//personaje[edad] = 40;
//o otra forma
let llave = "edad";
personaje[llave] = 40; //40
console.log(personaje.edad); //40

//eliminar propiedades de un objeto
delete personaje.edad; //elimina la propiedad edad
console.log(personaje.edad); //undefined