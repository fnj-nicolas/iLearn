//https://jsbin.com/vajuhasosu/edit?js,console


///declaro 
//funcion  + nombre + valor
function saluda(){
    console.log("Hello world!!")
}
saluda();
///
function cuadrado(numero){
    return numero*numero;
    console.log("No se podra ejecutar"); 
}
///
let cuadradoDeDos = cuadrado(2);

console.log(cuadradoDeDos);
console.log(cuadrado(2));
///
console.log(function(){}) //undefindebbnn

function hola (apellido, nombre = ""){
    console.log(apellido);
}

function cuadrado1(numero = 0){
    console.log(numero);
    return numero * numero;
}

console.log(cuadradoDeDos());

function sumaTodos(){
    return arguments[0] + arguments[1];
}
console.log(sumaTodos(1,2,3,4,5));