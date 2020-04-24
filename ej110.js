/**
 * Muestra por consola el promedio de notas de la cursada
 * @param {number} nota1 
 * @param {number} nota2 
 * @param {number} nota3 
 * @param {number} nota4 
 * @param {number} nota5 
 */
function promedio (nota1, nota2, nota3, nota4, nota5){
    const notas = [nota1, nota2, nota3, nota4, nota5];
        
    for (let index = notas.lastIndexOf(undefined); index > -1; index--) {
        const nota = notas[index];
        if (nota==undefined){
            notas.pop()
        }
    }
    
    let suma = 0;
    for (let index = 0; index < notas.length; index++) {
        const nota = notas[index];
        suma += nota;      
    }
    const prom = suma / notas.length;
    console.log(prom);
}

promedio(2,3);