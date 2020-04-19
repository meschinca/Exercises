/**
 * Asigna un valor numérico a la variable number y lo retorna al ser invocada
 */
const obtenerIDUsuario = function(){
    const number = 50;
    return number;
}

/**
 * Invoca la función obtenerIDUsuario y asigna el valor obtenido a la variable ID, luego evalúa su valor por comparación a 30 y devuelve el booleano
 */
const usuarioValido = function(){
    const ID = obtenerIDUsuario();
    if(ID>30) {
        return false;
    } else {
        return true;
    }
}

if (usuarioValido()==true) {
    console.log("El usuario es válido");    
} else  {
    console.log("El usuario no es válido");
}