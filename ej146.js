const usuario = {
    username: "batman",
    password: "Alfred1960KPO!"
};

if (autenticarUsuario(usuario.username, usuario.password)){
    console.log(usuario);
} else{
    console.log("Error: Usuario no autenticado.");
}

/**
 * Verifica que el nombre de usuario y contraseña sean correctos
 * @param {string} nombreDeUsuario 
 * @param {string} clave 
 */
function autenticarUsuario(nombreDeUsuario, clave){
    if ((nombreDeUsuario=="batman")&&(clave=="Alfred1960KPO!")){
        return true;
    } else{
        return false;
    }
}