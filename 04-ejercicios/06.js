//crear algo que cuente los numeros positivos de un array y los devuelva

let array=[2,5,7,15,-5,-100,55];

function cuantosPositivos(arr){
    let contador=0;
    /*
    for(let i=0;i<arr.length;i++){
        if(arr[i]>0){
            contador++;
        }
    }
    return contador;
*/
    for(let elemento of arr){
        if(elemento>0){
            contador++;
        }
    }
    return contador;
}
let resultado=cuantosPositivos(array);
console.log(resultado); 
