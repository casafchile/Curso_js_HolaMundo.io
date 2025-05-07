//Crear un algoritmo que tome un array de objetos y devuelva un array de pares

let array=[{
    id:1,
    nombre:"Nicolas",
},{
    id:2,
    nombre:"Felipe",
},{ 
    id:3,
    nombre:"Chanchito",
}];

//ejemplo de pares
/*
let pares=[
    [1,{id: 1 ,name: "Nicolas"}],
    [2,{id: 2 ,name: "Felipe"}],
    [3,{id: 3 ,name: "Chanchito"}]
];
*/

function toPairs(arr){
    let resultado=[];
    /*
    for (let i = 0; i < arr.length; i++) {
        let identificador=arr[i].id;
        let valor=arr[i];
        resultado.push([identificador,valor]);  
    }
    return resultado;
    */
   for(idx in arr){
        let elemento=arr[idx];
        resultado[idx]=[elemento.id,elemento];
    }
    return resultado;
}

let resultado=toPairs(array);
console.log(resultado);