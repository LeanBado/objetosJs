const person = {
    name: "Leandro",
    email: "leandro.bado.42@gmail.com",
}
//console.log("LEANDRO ANTES DE SER COPIADO: ")
//console.log(person)
   const person2 = person
   
   person2.name = "Jorge"
   person2.email = "jorgito@hotmail.com"

  // console.log("LEANDRO DESPUES DE SER COPIADO Y MODIFICADO POR PERSON2:")
  // console.log(person)
  // console.log("JORGITO: ")
  // console.log(person2)

   /*Metodo SHALLOW COPY - sirve para crear un nuevo objeto a partir de las propiedades de otro. 
   Esta copia solo se hace a un nivel alto, no se hace con objetos dentro de objetos (nested objects).
   Especificamente lo que hace es copiar el valor de las propiedades del objeto original y con eso crear el nuevo objeto
   Y NO que haga de referencia al apuntador (pointer) del espacio en memoria donde estan los datos, como el caso de arriba. Pero
   con los objetos anidados no funciona porque no copia el valor de las propiedades del objeto dentro del objeto, sino que ahi si
   hace referencia al apuntador del espacio en memoria de donde estan los datos de ese objeto anidado del objeto padre. */

   const hermano = {
    name: "Patricia",
    email: "patricia@gmail.com",
   }
   const hermano2 = {}
   //console.log(hermano)
   //console.log(hermano2)

   for(prop in hermano){
    hermano2[prop] = hermano[prop]
   };

   hermano2.name = "Fabio";
   hermano2.email = "fabio@hotmail.com";
   //console.log("despues del shallow copy quedan:")
   //console.log(hermano)
   //console.log(hermano2)
const mama = {
    name: "Patricia",
    email: "patricia@asd.com",
    hijos: {
        hombre: "leandro",
        mujer: "valentina",
    }
}
console.log(mama);
   const mama2 = Object.assign({}, mama); //hace lo mismo que el for anterior y tiene el mismo problema con los objetos anidados
   console.log(mama2)
 mama2.hijos.hombre = "jorge"
 //console.log(mama2)
 //console.log(mama)
    const mama3 = Object.create(mama); //hace lo mismo que el for y el metodo assign y tiene el mismo problema con los objetos anidados, pero las propiedades se copian dentro del metodo prototype
    console.log(mama3);

const persona = {
    name: "leandro",
    age: 29,
    redes:{
        twitter: "leandritooo",
        facebook: "leaFacebook",
    },
}
console.log(persona)

const personaStringify = JSON.stringify(persona); //copia los valores dentro del objeto persona, los convierte en string y en este caso lo asigna a "personita". Funciona con objetos anidados pero no funciona para copiar metodos 

console.log(personaStringify)

const personaParse = JSON.parse(personaStringify); // analiza una cadena de texto (string) y lo devuelve como objeto.
//estos metodos no son recomendados para copiar objetos porque por ejemplo los metodos no los copia y no avisa (no da error), o algunos tipos de datos no soportados (NaN) los convierte en null
console.log(personaParse)