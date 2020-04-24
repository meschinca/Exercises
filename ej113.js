/**
 * Retorna el perímetro del rectángulo con base y altura indicada
 * @param {number} base 
 * @param {number} altura 
 */
function obtenerPerimetroRectangulo (base, altura){
    let perimetro
    if (base==altura){
        perimetro = 4*base;
    } else{
        perimetro = 2 * base + 2 * altura;
    }
    console.log(`El perímetro es ${perimetro}`);
    if(perimetro>100){
        console.log("El perímetro es muy grande");
    } else{
        console.log("Este perímetro no es muy grande");
    }
    return perimetro;
}

obtenerPerimetroRectangulo(1,100);
obtenerPerimetroRectangulo(12.5,3.14);