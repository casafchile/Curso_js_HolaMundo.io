
const punto={
    x: 10,
    y: 15,
    dibujar: function(){
        console.log('Dibujando...')
    }
    //dibujar: () { console.log('Dibujando...')} //Es lo mismo que lo de arriba, pero con la sintaxis de ES6
};

//delete punto.dibujar; //eliminar la propiedad dibujar del objeto punto
if("dibujar" in punto){ //verifica si existe la propiedad dibujar en el objeto punto
    punto.dibujar();
}

//let keys = Object.keys(punto); //es lo mismo que el de abajo, pero mas largo
console.log(Object.keys(punto)); //muestra las propiedades del objeto punto

//para acceder a las propiedades del objeto punto, se puede usar la notacion de punto o la notacion de corchetes

for (let llave of Object.keys(punto)) { //recorre las propiedades del objeto punto
    console.log(llave, punto[llave]); //muestra la llave y el valor de la propiedad
}

for (let entry of Object.entries(punto)) { //recorre las propiedades del objeto punto
    console.log(entry); //muestra la llave y el valor de la propiedad
}

//Metodo nuevo de ES6 para recorrer objetos, es lo mismo que el de arriba pero mas corto
for (let llave in punto) { //recorre las propiedades del objeto punto
    console.log(llave, punto[llave]); //muestra la llave y el valor de la propiedad
}