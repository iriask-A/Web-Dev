alert(null || 2 || undefined); // 2
alert(alert(1) || 2 || alert(3)); // 1, 2
alert(1 && null && 2); // null
alert(alert(1) && alert(2)); // 1, undefined
alert(null || 2 && 3 || 4); // 3

age = prompt("How old are you?", 18);

if (age >= 14 && age <= 90  ) {
    alert("You are welcome!");
} else {
    alert("Sorry, you are not allowed to enter.");
}

if (age < 14 || age > 90) {
    alert("Sorry, you are not allowed to enter.");
} else {
    alert("You are welcome!");
}
if (!(age >= 14 && age <= 90)) {
    alert("Sorry, you are not allowed to enter.");
} else {
    alert("You are welcome!");
}

if(-1 || 0) alert( 'first' ); // -1
if(-1 && 0) alert( 'second' ); // no output
if(null || -1 && 1) alert( 'third' ); // third


let userName = prompt("Who's there?", '');

if (userName == 'Admin') {
    let pass = prompt('Password?', '');
    if (pass == 'TheMaster') {
        alert('Welcome!');
    } else if (pass == '' || pass == null) {
        alert('Canceled');
    } else {
        alert('Wrong password');
    }
} else if (userName == '' || userName == null) {
    alert('Canceled');
} else {
    alert("I don't know you");
}