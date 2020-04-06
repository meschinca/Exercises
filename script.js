const str1 = "         Definir    ";

let textLength = str1.length;
let trimmedStr1 = str1.trim();
let letterArray = trimmedStr1.match(/[abcdefghijklmnopqrstuvwxyz]/gi);
let letterCount = letterArray.length;

if(textLength==0){
    Console.log("No hay texto.")
} if(letterCount==0){
    console.log("El texto no contiene letras.");
} else{
    //01
    let spaceArray = trimmedStr1.match(/\s/g);
    if (spaceArray!=null) {
        let spaceCount = spaceArray.length;
        if (spaceCount>0){    
            console.log("01-El texto contiene más de una palabra.");
        }
    } else{
        console.log("01-El texto contiene una palabra.");
    }
    //02
    if (letterCount >10) {
        console.log("02-El texto contiene más de 10 letras.");
    } else{
        console.log("02-El texto no contiene más de 10 letras.");
    }
    //03
    if (letterCount%2==0){
        console.log("03-La cantidad de letras en el texto es par.");
    } else {
        console.log("03-La cantidad de letras en el texto es impar.");
    }
    //04
    let first4 = letterArray.slice(0, 4);
    if (letterCount >= 4){
        console.log("04-Las primeras cuatro letras del texto son: '" + first4 + "'.");
    } else {
        console.log("04-El texto contiene menos de 4 letras.");
    }
    //05
    let allCaps = trimmedStr1.toUpperCase();
    let noCaps = trimmedStr1.toLowerCase();
    if (trimmedStr1==allCaps){
        console.log("05-El texto está todo en mayúsculas.");
    } if(trimmedStr1==noCaps) {
        console.log("05-El texto está todo en minúsculas.");
    } else{
        console.log("05-El texto contiene mayúsculas y minúsculas.");
    }
    //06
    let lastWord = trimmedStr1.slice((trimmedStr1.lastIndexOf(" ")+1),);
    if (trimmedStr1.lastIndexOf(" ")>0){
        console.log("06-La última palabra del texto es: '" + lastWord + "'.");
    } else{
        console.log("06-La última palabra del texto es: '" + trimmedStr1 + "'.");
    }
    //07
    
    //08
    
    //09
    let questionMark = trimmedStr1.indexOf("?");
    if (questionMark>0){
        console.log("09-Hay una pregunta en el texto.");
    } else{
        console.log("09-No hay ninguna pregunta en el texto.");
    }
    //10
    let newStr1 = trimmedStr1.match(/dad/);
    if (newStr1!=null) {
        let replacedStr1 = trimmedStr1.replace(/dad/,"tud");
        console.log("10-" + replacedStr1);
    } else {
        console.log("10-No se encontró ningún 'dad' en el texto.");
    }
    //11
    if (spaceArray==null) {
        let upperCaseStr1 = trimmedStr1.toUpperCase();
        console.log("11-" + upperCaseStr1);
    } else {
        let spaceCount = spaceArray.length;
        if (spaceCount=1) {
            let splitArray = trimmedStr1.split(" ");
            let firstWord = splitArray[0];
            let secondWord = splitArray[1]; 
            let C = secondWord.slice(0,1);
            let ase = secondWord.slice(1);
            let camel = firstWord.toLowerCase();
            let Case = C.toUpperCase() + ase.toLowerCase();
            let camelCase = camel + Case;
            console.log("11-" + camelCase);        
        }if (spaceCount>1) { 
        let lastWord = trimmedStr1.slice(trimmedStr1.lastIndexOf(" ")+1);
        let lowerCaseLastWord = lastWord.toLowerCase();
        console.log("11-" + lowerCaseLastWord);
        }
    }
}