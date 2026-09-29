//single line comment
console.log('alamin');
/* mutiple comments */
/* operators
+ increments ++
- decrement --
* modulus % 
/ exponetial **
*/
//arithmaticoperator
let a = 10;
let b = 4;
let c = a + b;
console.log(c);
console.log('a+b', a + b);
console.log('a-b', a - b);
console.log('a*b', a * b);
console.log('a/b', a / b);
console.log('a%b', a % b);
console.log('a**b', a ** b);
//nary operators
console.log('a++', a++);
console.log('a--b', a--);
console.log('a=', a, 'b=', b);
console.log('a++', a++);
console.log(a);
console.log('a--', a--);
console.log(a);
console.log('++a', ++a);
console.log(a);
console.log('--a', --a);
console.log(a);
//asigment operators
console.log('a +=', (a += 4));
console.log('a -=', (a -= 4));
console.log('a *=', (a *= 4));
console.log('a %=', (a %= 4));
console.log('a **=', (a **= 4));
//assignments operatos
console.log('a ==b', a == b);
console.log('a ===b', a === b);
console.log('a !==b', a !== b);
console.log('a !=b', a != b);
console.log('a >b', a > b);
console.log('a >=b', a >= b);
console.log('a <b', a < b);
console.log('a <=b', a <= b);
//logical operators
let cond1 = a > b;
let cond2 = a === 10;
console.log('cond1 && cond2 =', cond1 && cond2); //conditional
//conditional  statements
//if condition
/*
let age = 18;
let mode = 'dark';
let color;
if (mode === 'dark') {
    color = 'black';
}
if (mode === 'light') {
    color = 'white';
}
cpnsole.log(color);
*/
//if-else condition
let numbe = 60;
if (numbe % 2 === 0) {
    console.log('even');
} else {
    console.log('odd');
}
//syntex -->rules
//else-if statements
let mode = 'dark';
let color;
if (mode === 'dark') {
    color = 'black';
} else if (mode === 'blue') {
    color = 'blue';
} else if (mode === 'pink') {
    color = 'pink';
} else {
    color = 'white';
}
console.log(color);
/*only condition true hower por sudu ak kaz kora labe oi somoy oi kaz valuse assign korte hoite pare abr print korte hoite pare*/
if (mode === 'dark') console.log(mode);
//normaly eyta use kori
if (mode === 'dark') {
    console.log(mode);
}
//ternary Operators
let age = 25;
let result = age >= 18 ? 'adult' : 'not adult';
console.log(result);
//different way
age >= 26 ? console.log('adult') : console.log('not adult');

//MDN Docs
//switch statements
// practices Question1
/*
let name = prompt('hellow');
console.log(name);*/
let number = prompt("Enter a Number:");
if (number % 5 === 0) {
    console.log(number, " is multple of 5");
} else {
    console.log(number, " is not multple of 5");
}

//q2
let num = prompt("Enter your result:");
if (num >= 80 && num <= 100) {
    console.log('Your grade is A');
} else if (num >= 70 && num <= 79) {
    console.log('Your grade is B');
} else if (num >= 60 && num <= 69) {
    console.log('Your grade is C');
} else if (num >= 50 && num <= 59) {
    console.log('Your grade is D');
} else {
    console.log('Your grade is F ');
}