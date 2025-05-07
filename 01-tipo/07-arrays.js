let animales=["chanchito", "Caballo"];
console.log(animales); //["chanchito", "Caballo"]
console.log(animales[0]); //chanchito

animales[2]="Dragon"; //agrega un nuevo elemento al array
console.log(animales); //["chanchito", "Caballo", "Dragon"]

animales[10]="Perro"; //agrega un nuevo elemento al array
console.log(animales); //["chanchito", "Caballo", "Dragon", <7 empty items>, "Perro"]
console.log(typeof animales); //object
console.log(animales.length); //11  