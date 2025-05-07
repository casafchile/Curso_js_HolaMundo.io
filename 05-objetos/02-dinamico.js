const user = {
    id: 1,
};

user.name="Felipe Eduardo";
user.guardar = function(){                  //Funcion anonima
    console.log("Guardando", user.name);
}
user.guardar();

//Eliminar algun atributo de un objeto es con -> delete 
delete user.name;
user.guardar();
console.log(user);

//No cambiar los datos de un objeto es con -> Object.freeze()

//user1=Object.freeze({id: 1}); //no se puede modificar el objeto
user1=Object.seal({id: 1}); //no se puede agregar ni eliminar propiedades, pero si se pueden modificar
user1.name="Felipe";
user1.id=2; 
console.log(user1);