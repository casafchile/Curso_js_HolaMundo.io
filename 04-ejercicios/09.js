let pairs = [
    [1, { id: 1, name: "Nicolas" }],
    [2, { id: 2, name: "Felipe" }],
    [3, { id: 3, name: "Chanchito" }],
];

let array = [{
    id: 1,
    nombre: "Nicolas",
}, {
    id: 2,
    nombre: "Felipe",
}, {
    id: 3,
    nombre: "Chanchito",
}];

function toColection(pairs){
    let resultado=[];
    /*for(let i=0;i<pairs.length;i++){
        let identificador=pairs[i][0];
        let valor=pairs[i][1];
        resultado.push({id:identificador,...valor});
    }
    return resultado;
*/
    for(let idx in pairs){
        let elemento=pairs[idx];
        resultado[idx]=elemento[1];
        resultado[idx].id=elemento[0];
    }
    return resultado;
}
let resultado=toColection(pairs);
console.log(resultado);