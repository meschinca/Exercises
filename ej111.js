/**
 * Retorna el booleano correspondiente si el valor es par
 * @param {number} numero
 */
function esPar(numero){
    if ((numero%2)==0){
        console.log(`${numero} es par`);
        return true;
    } else {
        console.log(`${numero} no es par`);
        return false;
    }
}

esPar(2);
esPar(5);
esPar(3);
esPar(24);
esPar(12);