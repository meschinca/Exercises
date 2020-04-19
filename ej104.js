/**
 * Crea la serie de Fibonacci para los primeros diez términos y los muestra en consola
 */
const fibonacci = function(){
    let array = [0, 1]
    for (let index = 0; array.length<10; index++) {
        const scndToLast = array[index];
        const last = array[index+1];
        const newNumber = scndToLast + last;
        array.push(newNumber);
    }
    console.log(array);
}

fibonacci();
fibonacci();
fibonacci();