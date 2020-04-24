/**
 * Recibe un texto y lo muestra invertido por consola
 * @param {string} text 
 */
function invertir(text){
    const textArray = text.split("");
    textArray.reverse();
    console.log(textArray.join(""));

}

invertir("this method will change the original array");