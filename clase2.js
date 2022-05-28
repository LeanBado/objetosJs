// Objetos literales
const natalia = {
    name: "Natalia",
    age: 20,
    cursosAprobados: [
      "Curso Definitivo de HTML y CSS",
      "Curso Práctico de HTML y CSS",
    ],
    aprobarCurso(nuevoCursito) {
      this.cursosAprobados.push(nuevoCursito);
    },
  };
  
  // Prototipos
  function Student(name, age, cursosAprobados) {
    this.name = name;
    this.age = age;
    this.cursosAprobados = cursosAprobados;
  }
  Student.prototype.aprobarCurso = function (nuevoCursito) {
    this.cursosAprobados.push(nuevoCursito);
  }
  
  const juanita = new Student(
    "Juanita Alejandra",
    15,
    [
      "Curso de Introducción a la Producción de Videojuegos",
      "Curso de Creación de Personajes",
    ],
  );
  
  // Prototipos con la sintaxis de clases
  class Student2 {
    constructor({               // Se pueden pasar los parametros dentro de un objeto o escribiendolos normal
      name,                     // y despues cuando se cree el objeto en el caso de que los parametros sean un objeto
      cursosAprobados = [],     // se pasan dentro de un objeto como el ejemplo. Sino se usa el objeto como parametro, se pasan los
      age,                      // valores normales como una función, separados por coma(,)
      email,
    }) {
      this.name = name;
      this.email = email;
      this.age = age;
      this.cursosAprobados = cursosAprobados;
    }
  
    aprobarCurso(nuevoCursito) {
      this.cursosAprobados.push(nuevoCursito);
    }
  }
  
  const miguelito = new Student2({
    name: "Miguel",
    age: 28,
    email: "miguelito@platzi.com",
  });