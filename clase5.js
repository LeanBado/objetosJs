function isObject(subject) {
    return typeof subject == "object"
}
function esUnArray(subject) {
    return Array.isArray(subject);
}

function deepCopy(subject) {
    let copySubject;
    const subjectIsArray = esUnArray(subject);
    const subjectIsObject = isObject(subject);

  if(subjectIsArray) {
        copySubject = [];
    } else if(subjectIsObject) {
        copySubject = {};
    } else {
        return subject;
    }

    
    for(key in subject) {
            const keyIsObject = isObject(subject[key]);
            if(keyIsObject) {
                copySubject[key] = deepCopy(subject[key]);
    } else {
        if(subjectIsArray) {
            copySubject.push(subject[key]);
        } else {
            copySubject[key] = subject[key]
            }
        }
    }
    return copySubject;
} 

//abstracción con objetos sin prototipos

const studentBase = {
    name: undefined,
    email: undefined,
    age: undefined,
    approvedCourses: undefined,
    learningPaths: undefined,
    socialMedia: {
      facebook: undefined,
      twitter: undefined,
      instagram: undefined,
    }
  };
  
  const lea = deepCopy(studentBase);
  Object.defineProperty(lea, "name", {
      value: "Lea",
      writable: false, // en falso NO permite que se modifique el valor (por defecto viene en true)
      configurable: false, //en false NO permite que se borre el elemento (por defecto viene en true)
  })
  //Object.seal(lea); //* Ninguna propiedad del objeto lea se podrá eliminar
  console.log(Object.isSealed(lea)); //* Verifica si el objeto tiene todas sus propiedades protegidas (o sea que tengan valor false), como por ejemplo con .seal
  console.log(Object.isFrozen(lea)); //* Verifica si el objeto tiene todas sus propiedades protegidas y además no se pueden agregar otras
lea.name = "patricia"
delete lea.name
  console.log(lea)