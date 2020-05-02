let arreglo = [1,23,234,12,123];

for (let i=0 ; i<arreglo.length; i++){
    let elemento = arreglo[i];
}

//metodos y operaciones sobre arreglos
let arreglo=["java","python","javaScript","ruby"]

//Eliminar un elemento, puedo eliminar mas de un elemento
arreglo = arreglo.filter((el) => el != "ruby");


//devuelve la primer condicion de verdadero
let el = arreglo.find(el => el == "javaScript");

arreglo.forEach(function(elemento){
    console.log(elemento);
})  //recorre el arreglo 


//Crea un nuevo arreglo con el cuadrado de sus numeros
let numeros=[2,35,6,20];
let cuadrado = numeros.map(numeros => numeros*numeros);
console.log(cuadrado)
//pero tambien...
//conviente un cadena de strings en numeros
let numeros = ["2","35","6","20"];
numeros = numeros.map(numeros => parseInt(numero));
console.log(numeros);