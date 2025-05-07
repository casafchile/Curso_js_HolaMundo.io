//Se puede utilizar en todos estos ciclos:
    //for
    //for in
    //for of
    //do while

let i= 0;
while(i < 6){
    i++;
    if(i===2){
        continue; // salta la iteracion 3
    }
    if(i===4){
        break; // termina el ciclo
    }
    console.log(i); // imprime 1,2,4,5,6
}