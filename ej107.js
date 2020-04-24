/**
 * Retorna el número más grande
 * @param {number} numero1 
 * @param {number} numero2 
 */
function numeroMasGrande (numero1, numero2){
    if ((typeof numero1 != "number")||(typeof numero2 != "number")){
        console.log("Esta función espera valores del tipo number");
    } else{
        if(numero1==numero2){
            console.log(`Los dos números son ${numero1}`);
        }else{
            if(numero1>numero2){
                console.log(numero1);
                return numero1;
            } else{
                console.log(numero2);
                return numero2;
            }
        }
    }
}

numeroMasGrande(1,2);