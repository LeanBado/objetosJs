//Module pattern y namespaces: propiedades privadas en JavaScript

function create({
    name = advertencia("name"),
    twitter = "default",
    edad,
    facebook = "default",
    email = advertencia("email"),
    instagram,
    cursosAprobados = [],
} = {}){     
    return {
        name,
        edad,          
        email,          
        redes: {
            twitter,
            instagram,
            facebook,
        },
        cursosAprobados
    };
}

const lea = create({
    name: "Leandro",
    edad: 29,
    instagram: "leainsta",
    email: "leaEmail",

})
lea.name = "jorge";
console.log(lea)

//para que el usuario no pueda cambiar el valor de las propiedades una vez definidas:
//dentro de la función se declara una constante que va a contener las propiedades privadas a las que no van a acceder los usuarios
//y otra constante que va a contener todas las propiedades que son "publicas" y los usuarios si van a acceder
//entonces como solo retorna la constante publica, el nombre al estar en la constante privada solo se accede por los metodos 
//que NOSOTROS hacemos y configuramos dentro de la constante publica, en este caso changeName y readName

function create2({
    name = advertencia("name"),
    twitter = "default",
    edad,
    facebook = "default",
    email = advertencia("email"),
    instagram,
    cursosAprobados = [],
} = {}){    
    const privado= {
        "_name": name,
    } 
    const publico = {
        edad,          
        email,          
        redes: {
            twitter,
            instagram,
            facebook,
        },
        cursosAprobados,
        changeName(newName){
            privado["_name"] = newName;         //método que sólo permite modificar el nombre
        },
        readName(){                             //método que sólo permite leer el nombre
            return privado["_name"];
        },
    }
    return publico;
}

const valen = create2({
    name: "Valentina",
    edad: 20,
    instagram: "valenInsta",
    email: "ValenEmail",

})


console.log(valen.readName());
valen.changeName("Valennnnnn")

console.log(valen.readName());

//para que el usuario no pueda acceder a modificar los metodos changeName y readName, se puede usar Object.defineProperty() y modificar a falso
// configurable (no pueden borrarlo) y writtable (no pueden modificarlo). PERO ESTO DESPUES A LA LARGA NO PERMITE TRABAJAR CON POLIMORFISMO 
//CON ESAS FUNCIONES PORQUE NO SE PUEDEN MODIFICAR