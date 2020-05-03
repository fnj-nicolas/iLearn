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
console.log(cursoJS.titulo);


//////"CLASES"////////////

//class Curso{} //Declaracion de clase
//let Curso = class{}             ///expresión class
//let Usuario = class Usuario{}   ///expresión class


class Curo{

    constructor(titulo){
        this.titulo = titulo;
    }

    inscribir(usuario){
        console.log(usuario + +" se ha inscrito");
    }
}

let javaScriptCuro = new Curso("Curso de JS");

console.log(javaScriptCuro.titulo)

javaScriptCuro.inscribir("Nicolas")


////Constructo//// 
/// en programacion orientada a obejtos, Generar un nuevo objeto a partir de una nueva clase

class Curso{

    constructor(titulo,duracion,color="yellow"){
        ///arguments    
        this.titulo = titulo;
        this.duracion = duracion;
        this.color = "color"
    }

}

new Curso("Curso Profesional javaScript")


/////herencia/////
//1.-
class Vimeo{
    play(){this.video.play();}
    duration(){return this.video.duration/100;}
    open(){this.redirectToVimeo(this.video);}
}

class YouTube{
    play(){this.video.play();}
    duration(){return this.video.duration/100;}
    open(){this.redirectToYouTube(this.video);}
}

//2.-Aplicando herencia.
//definir clase padre
class Player{
    play(){this.video.play();}
    duration(){return this.video.duration/100;}
}
//extends la clase padra a las clases hijas
class Vimeo extends Player{
    open(){this.redirectToVimeo(this.video);}
}

class YouTube extends Player{
    open(){this.redirectToYouTube(this.video);}
}

let video = new YouTube();

///3.-Overwrite
class User {
    saludar(){
        console.log("Hola usuario");
    }
}
class Admin extends User{
    saludar(){
        console.log("Hola usuario");
        console.log("Aqui esta el panel de administracion");
    }
}

//3.1. Objeto super, podemos obtener acceso a los metodos del padre

class User {
    saludar(){
        console.log("Hola usuario");
    }
}
class Admin extends User{
    saludar(){
        super.saludar();
        console.log("Aqui esta el panel de administracion");
    }
}

let admin = new Admin ();
admin.saludar();
//"Hola usuario"
//"Aqui esta el panel de administracion"

//3.2

class User{
    constructor(nombre){
        this.nombre = nombre; ///recibe el nombre del usuario
    }
    saludar(){
        console.log("Hola "+ this.nombre);
    }
}

class Admin extends User{
    constructor(nombre){
        super(nombre);
    }
    saludar(){
        super.saludar();
        console.log("Aqui esta el panel de administracion")
    }
}

let admin = new Admin("Nicolas");
admin.saludar();

//metodos accesores (abstracción)
class Usuario{
    constructor(nombre){ this.nombre = nombre;}
}

let user = new Usuario("Francisco");
console.log(user.nombre);
user.nombre="Nicolas";
console.log(user.nombre);

//1.-
class Usuario{
    constructor(nombre){this._name= nombre;}
    ///Las propiedades no pueden tener el mismo nombre que sus metodos accesores 
    // es una conveción utilizar una barra baja "_" antes del nombre de la propiedad
    get name(){
        return this._name.charAt(0).toUpperCAse()+this._name.slice(1); ///mostrarla
    }
    set name(nombre){ ///solo puede recibir 1 parametro
        this._name=nombrebbbbvvvbbnn;///como se modifica
    }
}

let user = new Usuario("nicolas");
user.name="francisco";
console.log(user.name);

/////METODOS ESTATICOS////////
///no necesitan de una instacia para funcionar
class Usuario{
    constructor(permisos="lectura"){this.permisos = permisos;}
    static createAdmin(){
        let user = new Usuario ("administrador");
        return user;
    }
}


let administrador = Usuario.createAdmin();