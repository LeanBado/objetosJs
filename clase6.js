//factory pattern - RORO (Receive an Object, Return and Object) - función que sirva para crear objetos


function create({
    name = advertencia("name"),
    twitter = "default",
    edad,
    facebook = "default",
    email = advertencia("email"),
    instagram,
    cursosAprobados = [],
} = {}){            //al poner = {}, por default si crean un objeto y no pasan argumentos, se crea un objeto vacio y NO tira error
    return {
        name,
        edad,           //se puede evitar name: name, edad: edad, porque JS intuye que va a ser el mismo que el parametro pasado
        email,          //si se quiere cambiar el nombre ahí si hay que ponerle un valor.
        redes: {
            twitter,
            instagram,
            facebook,
        },
        cursosAprobados
    };
}

function advertencia (parametro){
    throw new console.error("el " + parametro + " es obligatorio completarlo");
}
//al momento de pasar los parametros en una funcion normal, debería coincidir el orden de lo que se pone cuando se invoca la funcion
// con el orden de cuando se creó la función, para no tener este problema y poder poner los datos mezclados, se usa el concepto de RORO
//entonces al momento de crear la función se pasa un sólo argumento en forma de {} con los datos que tenga que completar adentro
const lea = create({
    edad: 29,
    name: "Leandro",
    instagram: "leainsta",
    email: "leaEmail",

})
const lauti = create({
    edad: 29,
    name: "Lautaro",
    email: "lautiEmail",
})
console.log(lea);
console.log(lauti)