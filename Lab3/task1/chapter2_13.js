let i = 3;
while (i) {
    alert( i-- );
} // 3, 2, 1

let b = 0;
while (++b < 5) alert( b ); // 1, 2, 3, 4
    
let c = 0;
while (c++ < 5) alert( c ); // 1, 2, 3, 4, 5

for (let i = 0; i < 5; i++) alert( i ); // 0, 1, 2, 3, 4

for (let i = 0; i < 5; ++i) alert( i ); // 0, 1, 2, 3, 4

for (let i = 2; i <= 10; i++) {
    if (i % 2 == 0) {
        alert(i);
    }
} // 2, 4, 6, 8, 10

let m = 0;
while (m < 3) {
    alert( `number ${m}!` );
    m++;
}

let num;
do {
    num = prompt("Enter a number greater than 100?", 0);
} while (num <= 100 && num);    

let n = 10;
for (let i = 2; i <= n; i++) {
    let isPrime = true;
    for (let j = 2; j < i; j++) {
        if (i % j == 0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime) {
        alert(i);
    }
} // 2, 3, 5, 7