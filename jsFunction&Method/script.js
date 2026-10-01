// 
//q1
let n = prompt("Enter a number: ");
let arr3 = [];
for (let i = 0; i < 5; i++) {
    arr3[i - 1] = i;
}
console.log(arr3);
let sum1 = arr3.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
});
console.log(sum1);
//factorial
let factorial = arr3.reduce((accumulator, currentValue) => {
    return accumulator * currentValue;
});
console.log(factorial);