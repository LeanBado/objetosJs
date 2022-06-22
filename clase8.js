//Getters y setters
//lo mismo de la clase anterior se puede aplicar con las palabras reservadas set y get
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
        set name(newName){
            privado["_name"] = newName;         //método que sólo permite modificar el nombre
        },
        get name(){                             //método que sólo permite leer el nombre
            return privado["_name"];
        },
    }
    return publico;
}
