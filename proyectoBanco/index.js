import {Cliente} from "./Cliente.js"
import { Empleado } from "./Empleados/Empleado.js";
import { Gerente } from "./Empleados/Gerente.js";
import { Director } from "./Empleados/Director.js";
import { SistemaAutenticacion } from "./SistemaAutenticacion.js";

//pruebas de funcionamiento

const empleado = new Empleado("Juan Perez","1234343",10000);
empleado.asignarClave("12345");
console.log(SistemaAutenticacion.login(empleado,"12345"));

const gerente = new Gerente("Pedro Rivas","232344",12000);
gerente.asignarClave("655");
console.log(SistemaAutenticacion.login(gerente,"655"));


const cliente = new Cliente("Leonardo","13804050","123224");
cliente.asignarClave("01111");
console.log(SistemaAutenticacion.login(cliente,"01111"));




