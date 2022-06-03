//clase de recursividad para lograr copiar objetos anidados y/o arrays anidados y/o con metodos a una variable nueva independiente de la original:
const obj1 = {
    a: "a",
    b: "b",
    c: {            //objeto a copiar
       d: "d",
       e: "e", 
    },
    editA() {
        this.a = "AAAAA";
    }
}; 


function isObject(subject) {
    return typeof subject == "object"
}
function esUnArray(subject) {
    return Array.isArray(subject);
}

//dentro de esta funcion sucedera todo,el copysubject guardara los datos, este esta esperando a saber si los datos son objetos,arrays u otras cosas como strings
function deepCopy(subject) {
    let copySubject;
    //estas const van a devolver true o false depende de si es un array o un objeto el elemento que se pasa respectivamente como subject
    const subjectIsArray = esUnArray(subject);
    const subjectIsObject = isObject(subject);

  if(subjectIsArray) {
        copySubject = [];
    } else if(subjectIsObject) {
        copySubject = {};
    } else {
        return subject;
    }

    //por ultimo empezamos a trabajar con los datos ya validados, segun el dato que sea correspondiente, trbajaremos objeto,arrays u otros valores.
    //creamos un bucle for para iterar por cada elemento dentro de subject, que en este caso se llamará "key"
    for(key in subject) {
            const keyIsObject = isObject(subject[key]);
    //con keyIsObject VUELVO a validar si los datos DENTRO de la estructura de datos YA VALIDADA son objetos o datos. 

            if(keyIsObject) {
                copySubject[key] = deepCopy(subject[key]);
    // si resulta que son objetos, entonces iremos copiando y pegando los datos en copySubject, y estos datos se iran copiando de manera identica y exitosa gracias la recursividad deepCopy(subject[key]);

    } else {
        if(subjectIsArray) {
            copySubject.push(subject[key]);
        } else {
            copySubject[key] = subject[key]
            }
        }
    }
        //si no son objetos y son arrays con .push se copia el valor de donde esté pisando "key" dentro de subject a copySubject 
        //y si no son objetos ni arrays, cualquier otro dato se le asigna con =
        
    return copySubject;
    // cuando sale del bucle (porque termino de iterar dentro de subject), y copio a copySubject ya sean objetos, arrays o todo el resto, lo devuelve.
} 