const usuario = {
    username: "batman",
    password: "Alfred1960KPO!"
};

if (autenticarUsuario(usuario)){
    console.log(usuario);
} else{
    console.log("Error: Usuario no autenticado.");
}

/**
 * Verifica que el nombre de usuario y contraseña sean correctos
 * @param {object} usuario
 */
function autenticarUsuario(usuario){
    if ((usuario.username=="batman")&&(usuario.password=="Alfred1960KPO!")){
        return true;
    } else{
        return false;
    }
}