const user1 = ["nacho", "Nerd1979"];
const user2 = ["pedro", "Batman0217"];
const user3 = ["marta", "Madre2312"];

/**
* Verifica que las credenciales de usuario coincidan con las establecidas
* @param {string} usuario 
* @param {string} password 
*/
function autenticarUsuario (usuario,password){
    let auth  
    switch (usuario){
        case user1[0]:
        case user2[0]:
        case user3[0]:
            switch(password){
                case user1[1]:
                case user2[1]:
                case user3[1]:
                    auth = true
                    console.log(`Bienvenido ${usuario}, te estabamos esperando`);
                    console.log(auth);
                    break;
                default:
                    console.log("Por favor ingrese credenciales válidas");
            }
            break;
        default:
            console.log("Por favor ingrese credenciales válidas");
    }
    return auth
}

autenticarUsuario("marta","Madre2312");