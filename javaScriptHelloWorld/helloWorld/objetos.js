//Declarar un objeto con JSON

let curso={
    titulo:"EStoy tomando un curso de JS",
    duracion: 3.2,
    formato:"video",
    bloque:["instroducion","Funciones"],
    inscribir:function(usuario){                        //Metodo
        console.log(usuario+" ahora está inscrito")
    }
}
//modificar propiedad
curso.titulo= "Curso base de JS";
//modificar metodo
curos["incribir"] = function(){};

//llamar una propiedad del objeto JSON
console.log(curso.titulo);
console.log(curso["titulo"]);


///////Funcion constructora/////////
function Curso(titulo){
    this.titulo= titulo;
    this.inscribir= function (usuario){
        console.log(usuario+" se ha inscripto");
    }
}

let cursoJS = new Curso("Curso de JS");
let cursoRuby = new Curso("Curso de Ruby");

console.log(cursoRuby.titulo);
console.log(cursoJS.titulo)


//////"CLASES"////////////

class Curso{} //Declaracion de clase

let Curso = class{}             ///expresión class
let Usuario = class Usuario{}   ///expresión class
