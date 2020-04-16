let arr = [];
let num = 11;

do {
    arr.push (num);
    num = num + 11;
} while (num <= 200)

console.log(arr);

let str = arr.join("");

let arr2 = str.split("");

let arr3 = [];

for (let i = 0; i < arr2.length; i++) {
    const subStr = arr2[i];
    let digit = parseInt(subStr);
    arr3.push(digit);
}

let total = 0

for (let i = 0; i < arr3.length; i++) {
    const digit = arr3[i];
    let mult = i * arr3[i];
    total += mult;
}

console.log(total);