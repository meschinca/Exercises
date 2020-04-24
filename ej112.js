/**
 * Muestra por consola los numeros que van de "inicio" a "fin"
 * @param {number} inicio 
 * @param {number} fin 
 */
function mostrarNumeros (inicio, fin){
    if ((typeof inicio != "number")||(typeof fin != "number")){
        numIni = parseInt(inicio);
        console.log(numIni);
        numFin = parseInt(fin);
        console.log(numFin);
        if ((typeof numIni != "number")||(typeof numFin != "number")){
            console.log("Por favor ingrese valores de tipo número");
        }else{
            if (numIni==numFin){
                console.log("Por favor ingrese dos valores distintos");
            } else{
                if (numIni<numFin){
                    let step = numIni
                    while (step<=numFin){
                        console.log(step);
                        step++;
                    }
                }else {
                    let step = numIni
                    while (step>=numFin){
                        console.log(step);
                        step--;
                    }
                }
            }
        }        
    }else{
        if (inicio==fin){
            console.log("Por favor ingrese dos valores distintos");
        } else{
            if (inicio<fin){
                let step = inicio
                while (step<=fin){
                    console.log(step);
                    step++;
                }
            }else {
                let step = inicio
                while (step>=fin){
                    console.log(step);
                    step--;
                }
            }
        }
    }
}

// mostrarNumeros(0,1000);
// mostrarNumeros(1000,0);
// mostrarNumeros(100,100);
mostrarNumeros("100",300);