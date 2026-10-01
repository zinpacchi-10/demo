function myLover() {
    console.log('Welcome to my GitHub Repo');
    console.log('we are learning Js');
}
//myLover();
for (i = 0; i <= 5; i++) {
    let cn = myLover();

}
//parameter
function myLow(msg) {

    console.log(msg);
}
//argument
myLow("i'm hungry");

function myLow(x, y) {
    s = x + y;
    return s;
}
let result = myLow(5, 10);
console.log(result);
//arrow function
let myArrow = (a, b) => {
        return a + b;
    }
    //mordern Js
    (a, b) => {
        console.log(a + b);
    };
myArrow(5, 10);
console.log(myArrow(5, 10));
//multiplication arrow function
let myMult = (a, b) => {
    return a * b;
};
console.log(myMult(3, 4));
//
const printHello = () => {
    console.log('Hello');
}
printHello();
//q1
let countVowels = (str) => {
    let vowels = 'aeiouAEIOU';
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str[i])) {
            count++;
        }
    }
    return count;
};
console.log(countVowels("Hello World"));
//alternative
function countVowelsAlt(str) {
    let count = 0;
    for (let char of str) {
        if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
            count++;
        }
    }
    console.log(count);
}