//verificando si el metodo autenticable() existe dentro de usuario Y si autenticable es un atributo dentro del usuario
export class SistemaAutenticacion {
    static login(usuario,clave) {
        if ("autenticable" in usuario 
            && usuario.autenticable instanceof Function)
            return usuario.autenticable(clave);
        else
            return false;
    }
}