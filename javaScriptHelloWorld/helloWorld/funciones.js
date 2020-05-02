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
let cuadradoDeDos = cuadrado(2);

console.log(cuadradoDeDos);
console.log(cuadrado(2));
///
console.log(function(){}) //undefined


function cuadrado1(numero = 0){
    console.log(numero);
    return numero * numero;
}

console.log(cuadradoDeDos());



/////// Cuando usar let,const y var///////////////////

function mayorDeEdad(edad){
    if (edad>=18){
        var resultado = "Eres mayor de edad"; /// Scope local de la funcion
    }else{                                   //// tiene alcance dentro de la FUNCION mas proxima
        var resultado = "Eres menor de edad";
    }
    console.log(resultado);
}

mayorDeEdad();/// ERES MENOR DE EDAD


function mayorDeEdad(edad){
    if (edad>=18){
        let resultado = "Eres mayor de edad"; // LET tiene alcance dentro del BLOQUE mas proximo
    }else{
        let resultado = "Eres menor de edad";
    }
    console.log(resultado);
}
mayorDeEdad();//////"ERROR"

function mayorDeEdad(edad){
    let resultado;
    if (edad>=18){
        rusultado = "Eres mayor de edad"; // LET tiene alcance dentro del BLOQUE mas proximo
    }else{
        resultado = "Eres menor de edad";
    }
    console.log(resultado);
}
mayorDeEdad();//////como tiene alcance dentro del bloque mas proximo, devuelve como resultado "Eres menor de edad"


//////Argumentos a funciones
///Argumentos
///Parámetros
///"los Argumentos "llenan" a los paramentros"
///no se revisa la cantidad de parametros que se le pasa a una funcion, pueden ser menos o mas.

function cuadrado (numero){
    if (numero == undefined){return;}
    return numero * numero;
}
console.log(cuadrado()); //undefined

//Valor por defecto
function cuadrado (numero = 0){
    if (numero == undefined){return;}
    return numero * numero;
}
console.log(cuadrado()); //devuelve 0 porque no se pasa ningun Argumento

function hola (apellido, nombre=""){}/// el orden es, que los parametro sin valor o no definidos TIENEN que ir primero

///funcions con mas de un valor
//puedo enviar cuantos argumentos quieras en una funcion sin importar cuantos paramentos de hallan creado
function sumaTodos(){
   console.log(arguments[6]);
   return arguments[0]+arguments[1];
}
console.log(sumaTodos(1,2,3,4,5,6,7));


////////funciones anonimas////////////
function executor (funcion){
    funcion();
}
function decirHola(){
    console.log("Hola");
   }
executor(decirHola);

//1.-
  
function executor (funcion){
    funcion();
}
function decirHola(){
    console.log("Hola");
}
executor(function(){
    console.log("Hola");
});

/// Arrow - function

let demo = ()=>{
    console.log("Hola mundo!");
}

function suma(a,b){
    return a+b;
}
//las dos funciones hacen lo mismo
suma = (a,b) => a+b

console.log(suma(2,3));