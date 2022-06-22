class Comment{
  constructor({
    contenido,
    nombreEstudiante,
    rolEstudiante = "estudiante",
  }){
    this.contenido = contenido;
    this. nombreEstudiante = nombreEstudiante;
    this.rolEstudiante = rolEstudiante;
    this.likes = 0;
  }

  publicar(){
    console.log(this.nombreEstudiante + " (" + this.rolEstudiante + ")");
    console.log("cantidad de likes: " + this.likes);
    console.log(this.contenido);
  }
}

class Classes {
    constructor(name, author){
        this.name = name
        this.author = author
    }
}

const claseIntroduccion = new Classes("clase introduccion", "juan DC")

class Courses {
    constructor({
      name,
      classes = [],
      isFree = false,
      lang = "spanish",
    }) {
      this.name = name;
      this.classes = classes;
      this.isFree = isFree;
      this.lang = lang;
    }
    get name() {
        return this._name;
      }
    
      set name(nuevoNombre) {
        if (nuevoNombre === "Curso que no sirve") {
          console.error("No se puede poenr ese nombre");
        } else {
          this._name = nuevoNombre; 
        }
    }
}
  

const cursoAlgoritmosBasicos = new Courses({
    name: "Algoritmos Básicos",
    classes:[
        "clase de fútbol POO",
        claseIntroduccion,
    ],
    isFree: true,
  })

const cursoTesting = new Courses({
    name: "Curso Testing",
    Classes: [
        claseIntroduccion,
        "clase presentar examen",
    ],
    lang: "english"
})

class LearningPath {
    constructor({
      name,
      courses = [],
    }) {
      this.name = name;
      this.courses = courses;
    }
  }
  
  const escuelaWeb = new LearningPath({
    name: "Escuela de Desarrollo Web",
    courses: [
      "curso JS",
      "curso React",
      "curso NextJS",
      cursoAlgoritmosBasicos,
    ],
  });

  const escuelaVgs = new LearningPath({
    name: "Escuela de Video Juegos",
    courses: [
      "curso Unreal",
      cursoTesting,
      "curso 3D",
      cursoAlgoritmosBasicos,
    ],
  });
  
  const escuelaData = new LearningPath({
    name: "Escuela de Data Science",
    courses: [
      "curso Python",
      "Curso Matematicas",
      "Curso Excel",
      cursoAlgoritmosBasicos,
    ],
  });


class Student {
  constructor({
    name,
    email,
    username,
    twitter = undefined,
    instagram = undefined,
    facebook = undefined,
    approvedCourses = [],
    learningPaths = [],
  }) {
    this.name = name;
    this.email = email;
    this.username = username;
    this.socialMedia = {
      twitter,
      instagram,
      facebook,
    };
    this.approvedCourses = approvedCourses;
    this.learningPaths = learningPaths;
  }

  publicarComentario(nuevoComentario){
    const comentario = new Comment({
      contenido: nuevoComentario,
      nombreEstudiante: this.name,
    })
    comentario.publicar()
  }
}

class FreeStudent extends Student {
  constructor(props) {
    super(props);
  }

  approveCourse(newCourses) {
    if (newCourses.isFree) {
      this.approvedCourses.push(newCourses);
      console.warn(this.name + ": perfecto, es gratis!");
    } else {
      console.warn("Lo sentimos, " + this.name + ", solo puedes tomar cursos gratis");
    }
  }
}

class BasicStudent extends Student {
  constructor(props) {
    super(props);
  }

  approveCourse(newCourses) {
    if (newCourses.lang !== "english") {
      this.approvedCourses.push(newCourses);
    } else {
      console.warn("Lo sentimos, " + this.name + ", no puedes tomar cursos en inglés");
    }
  }
}

class ExpertStudent extends Student {
  constructor(props) {
    super(props);
  }

  approveCourse(newCourses) {
    this.approvedCourses.push(newCourses);
  }
}

class Profesores extends Student {
  constructor(props) {
    super(props);
  }

  approveCourse(newCourses) {
    this.approvedCourses.push(newCourses);
  }

  publicarComentario(nuevoComentario){
    const comentario = new Comment({
      contenido: nuevoComentario,
      nombreEstudiante: this.name,
      rolEstudiante: "profesor"
    })
    comentario.publicar()
  }
}

const valentina = new Profesores({
  name: "Valentina",
  username: "Chuki",
  email: "profechuki@a.com",
  twitter: "valen",
  learningPaths: [
    escuelaWeb,
    escuelaData,
    escuelaVgs,
  ],
});

const lea = new FreeStudent({
  name: "Lea",
  username: "Lea42",
  email: "Lea@a.com",
  twitter: "leatw",
  learningPaths: [
    escuelaWeb,
    escuelaData,
  ],
});

const patricia = new BasicStudent({
  name: "Patricia",
  username: "Patri2",
  email: "patri22.11@a.com",
  instagram: "patriASD",
  learningPaths: [
    escuelaWeb,
    escuelaVgs,
  ],
});

//console.log(lea)
console.log(lea.approveCourse(cursoTesting))
console.log(patricia.publicarComentario("muy bueno!"))
//console.log(patricia)