let a = "cadena";

//var a = "cadena"

a = 2;
a = 2.3;


//Libreria -Math-
Math.PI // entrega el valor de Pi

Math.pow (10,2) //eleva 10 a la 2 = 100

Math.round (5.6) //Redondea

Math.sqrt (4) //Raiz cuadrada de un numero

///MAS INFORMACION https://www.w3school.com/js/js_math.aps


//Booleans

let booleano = new Boolean("");
console.log(booleano.toString());
undefined, NaN, null, 0, .0, "", false; //todos ellos datan falso

// COmparadores 

let edad = 24;

edad == 24; //True
edad == 20; //False
edad != 15; //Distinto, True
edad != 24;//Distinto, False
edad > 24; // Mayor, False
edad < 24;// Menor, False
edad < 28; //True
edad >= 24;// Mayor igual, true
24 == "24"; // TRUE,  == Compara el valor y no el tipo de dato
24 === "24"; // FLASE, === Comprar el tipo de dato y valor
edad == 24; // TRUE
22 !== "22"; // TRUE
22 !== 22 ; // FALSE

////OPERADORES LOGICOS/////

24 == 24 && "hola" == "hola" // && "AND" TRUE
24 == 24 && 13 === "13" //FALSE
24 === 24 || 10 ==  12  // || "OR" TRUE 
!(24 === 24) || 10 ==  12 // ! "NOT" FALSE

///////CONDICIONALES - if -////////////
if (5 =="5" && 10>2) console.log("condicion cumplida");

if (5 =="5" && 10>2) {
    console.log("condicion cumplida");
    console.log("condicion cumplida2");
}

let edad = 18;
if (edad > 18){
    console.log("true");
} else {
    console.log("false")
}

let calificacion = 9;
if (calificacion == 10){
    console.log("Exelente");
} else if (calificacion > 7){
    console.log("Muy Bien");
} else if (calificacion > 5){
    console.log("Puedes Mejorar")
}else{
    console.log("Reprobado")
}


////CICLOS///////

for (let i = 0; i<=9; i++){
    if (i%2==0) continue; // Impreme solo los pares, salta una iteracion
    if (i >=5) break; //termina el ciclo, "el ciclo terminara cuando i = 5"
    console.log(i);
}


let i = 1;
while(i<=10){
    i++;
    console.log(i)  //imprime de 2 a 11
}

let i = 1;
do{
    i++;
    console.log(i);
}while(i<=10)


/////undefined-null-NaN/////////////

///---undefinded---///
/// tipo de dato
typeof asdsda //nos devuelve el tipo de variable
///imprime "undefined"

typeof 2 ///imprime "number"

let numero
typeof numero
//imprime "undefined", ya que la variable ni el tipo de la misma fue definido.

///----null----///
// obejeto que indica la ausencia de valor

numero = null;

typeof numero;
///imprime que es un "object"

null == undefined ///TRUE, tienen el mismo valor 

//but

null === undefined /// FALSE, son distintos tipos de datos

///---NaN----////
///not a number
"asdsadasd" * 3 ///NaN

///cuando dividimos entre 0 da infinito
100/0 ///INFINITY

/*
Tomando como entrada un número entero, imprimir si es par o impar.

Recibir dos números usando prompt y sumarlos, restarlos, dividirlos y multiplicarlos

Imprimir la sucesión fibonacci el número de veces que indicó el usuario

Programar el juego del "Número Mágico" en el que se define un número y el usuario trata de adivinarlo, si el número que ingresó el usuario es menor, imprimir la pista "El número mágico es mayor", si el número que ingresó el usuario es mayor, imprimir la pista "El número mágico es menor"*/

let numero = parseInt(prompt("Ingrese un numero :"))
if (numero % 2 == 0 ){
    console.log("Numero es par");
} else {console.log("Numero impar");}

let num1 = parseInt(prompt("Ingrese primer numero: "));
let num2 = parseInt(prompt("Ingrese segundo numero: "));

console.log("suma: "+ num1+num2);
console.log("resta: "+ num1-num2);
console.log("divicion: "+ num1/num2);
console.log("multiplicacion: "+ mum1*num2);

let num1 = 0
let num2 = 1
let aux = 0
console.log(num1)
console.log(num2)
let num = parseInt(prompt("Ingrese el fin de la secuencia: "));
for(let i=0;i<num;i++){ 
    aux = num1+num2
    num1 = num2 // con este paso se guardaba en memoria el numero anterior
    num2 = aux
    console.log(aux)
}


alert("ADIVINE UN NUMERO DESDE 5 AL 10 TIENES 5 INTENTOS");
let numero = Math.floor(Math.random() * (10 - 5)) + 5;
let cont=0;

for(let num=0; num<5; num++){
    let usernum = parseInt(prompt("Ingrese un numero : "))
    if (usernum == numero){
    console.log("Acertaste al Numero")
    break;
    } else if(usernum < numero)
    console.log("El numero que ingresaste es menor")
    else if (usernum > numero) 
    console.log("El numero que ingresaste es mayor")
cont++;
}
if (cont == 5) alert("Has perdido! GAMER OVER")