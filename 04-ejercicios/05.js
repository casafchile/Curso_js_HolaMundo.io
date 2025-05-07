//crear algoritmo que devuelva numero menor y mayor de un array

let array=[2,5,7,15,-5,-100,55];

function getMenorMayor(arr){
    let mayor = arr[0];
    let menor = arr[0];
    /*for(let i=0; i<array.length; i++){
        if(arr[i]>mayor){
            mayor=arr[i];
        }
        if(arr[i]<menor){
            menor=arr[i];
        }
    }*/
    for(let i of arr){
        menor = menor<i ? menor : i;
        mayor = mayor>i ? mayor : i;
    }
    return [menor, mayor];
}
let numeros = getMenorMayor(array);
console.log(numeros);