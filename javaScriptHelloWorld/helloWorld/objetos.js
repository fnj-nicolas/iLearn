//Declarar un objeto con JSON

let curso={
    titulo:"EStoy tomando un curso de JS",
    duracion: 3.2,
    formato:"video",
    bloque:["instroducion","Funciones"],
    inscribir:function(usuario){
        console.log(usuario+" ahora está inscrito")
    }
}
//modificar propiedad
curso.titulo= "Curso base de JS";
//modificar metodo
curos["incribir"] = function(){};

//llamar una propiedad de la "Clase"
console.log(curso.titulo);
console.log(curso["titulo"]);