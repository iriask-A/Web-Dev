let a = +prompt("The first number?", 0);
let b = +prompt("The second number?", 0);

alert(a + b);

alert(6.35.toFixed(1)); // 6.3  
alert(1.35.toFixed(1)); // 1.4
// Because the precision of the number is not enough to represent 6.35 exactly, it is stored as 6.3499 and rounded to 6.3.

function readNumber() {
    let num;
    do {
        num = prompt("Enter a number?", 0);
    } while (!isFinite(num));
    if (num === null || num === '') return null;
    return +num;
}

alert(`Read: ${readNumber()}`); 

let i = 0;
while (i != 11) {
    i += 0.2; 
    if (i > 9.8 && i < 10.2){
        alert(i); 
    }
}

function random(min, max) {
    return min + Math.random() * (max - min);
}

alert(random(1, 5)); // any number from 1 to 5  

function randomInteger(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}

alert(randomInteger(1, 3)); // 1, 2, 3



