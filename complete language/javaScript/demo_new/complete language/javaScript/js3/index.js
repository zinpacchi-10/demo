//loop & string
for (let count = 1; count <= 100; count++) {
    console.log("sadia");

}
console.log("loop has ended");
//calculate sumof 1 to 5
let sum = 0;
for (let i = 1; i <= 9; i++) {
    sum = sum + i;
}
console.log("sum =", sum);
console.log('loop has ended');
//infinite loop
/*
for (let i = 1; i >= 0; i++) {
     console.log("i =", i);
}
*/
//while loop
let i = 1;
while (i <= 33) {
    console.log(" 143  =", i);
    i++;
}
//do-while loop
let ij = 20;
do {
    console.log("i know you");
    ij++;
}

while (ij <= 25);
//for-of loop
//iterator -> character
let str = "JavaScript";
let size = 0;
for (let val of str) {
    console.log("val =", val);
    size++;
}
console.log("String Size =", size);
//for-in loop
let student = {
    name: "Md. Al Amin",
    age: 21,
    cgpa: 3.4,
    isPass: true,

};
for (let key in student) {
    console.log("key =", key, "value", student[key]);
}
//print all 0 to 100 even number
for (let num = 0; num <= 100; num++) {
    //console.log(num);
    if (num % 2 === 0) {
        console.log("Even Number =", num);
    }
}
//print all 0 to 100 odd number
for (let num = 0; num <= 100; num++) {
    //console.log(num);
    if (num % 2 !== 0) {
        console.log("odd Number =", num);
    }
}
//q2
let gameNum = 26;
let userNum = prompt("uess the number:");
while (userNum != gameNum) {
    userNum = prompt("you enter wrong Numbertry again");
}
console.log("congratualtions you enter the write number");
//