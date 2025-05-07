let user = {
    id:1,
    nombre: 'Juan',
    edad: 25,
};

for (let prop in user) {
    console.log(prop,"->",user[prop]); // imprime la propiedad 
}

let animales = ['perro', 'gato', 'loro', 'pez'];
for (let indice in animales){
    console.log(indice,"->",animales[indice]); // imprime el indice

}