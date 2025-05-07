//{id:1, recuperarClave: function(){}}

//Se usa el this es para referirse al objeto que se esta creando
function Usuario(){
    this.id=1;
    this.recuperarClave = function(){    //metodos!
        console.log("Recuperar clave..."); 
    };
}

//para crear un objeto de la clase Usuario, se usa el operador new

let usuario=new Usuario(); //se crea un objeto de la clase Usuario
console.log(usuario);

//se crea un objeto de la nada, luego un prototipo, luego el this se le asigna el objeto que creamos,
//y si no tiene un return automaticamente se devuelve un this