/**
 * Ordena los numeros de manera ascendente o descendente
 * @param {number} numero1 
 * @param {number} numero2 
 * @param {number} numero3 
 * @param {boolean} descendente
 */
function ordenarNumeros(numero1, numero2, numero3, descendente){
    const arr = [numero1, numero2, numero3];
    if(descendente===true){
        arr.sort(function(a,b){return b-a});    
        console.log(arr);
    }else {
        arr.sort(function(a,b){return a-b});    
        console.log(arr);
    }
}

ordenarNumeros(10,8,25,true);