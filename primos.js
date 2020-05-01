/**
 * Muestra por consola los numeros primos hasta el valor ingresado, comenzando por el 1
 * @param {number} numero marca el fin de la secuencia de primos
 */
function constructorPrimos (numero){
  const listaNaturales = [];
  let step = 1;
  do{
    listaNaturales.push(step);
    step++;
  } while (step <= numero)
  const primos = [];
  for (let i = 0; i < listaNaturales.length; i++) {
    const element = listaNaturales[i];
    const anteriores = listaNaturales.slice(0,i+1);
    const divisores =[];
    for (let index = 0; index < anteriores.length; index++) {
      const part = anteriores[index];
      let resto = element % part;
      if(resto==0){
        divisores.push(part);
      }
    }
    if (divisores.length<=2){
      primos.push(element);
    }    
  }
  console.log(primos);
}
constructorPrimos(1000);