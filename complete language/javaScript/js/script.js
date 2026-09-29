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
let numbe = 10;
if (numbe % 2 === 0) {
    console.log("even");
} else {
    console.log("odd");
}