//array start
let marks = [97, 82, 75, 64, 36];
console.log(marks);
typeof marks;
//array indices
marks[4] = 90;
console.log(marks);
//loop over an array
//for loop
let heros = ['alamin', 'siam', 'alim', 'shovo', 'ornob', 'mehedi'];
for (let idx = 0; idx <= idx.length; idx++) {
    console.log(heros[idx]);
}
//for of
for (let el of heros) {
    console.log(el);
}
let cities = ['dhaka', 'chittagong', 'rajshahi', 'bogura', 'shylet', 'comilla'];
for (let city of cities) {
    console.log(city);

    console.log(city.toUpperCase());
}

//q1
let stds = [85, 97, 44, 37, 78, 60];
let sum = 0;
for (let val of stds) {
    sum += val;

}
let avg = sum / stds.length;
console.log(avg);
//q2
let items = [250, 645, 300, 900, 50];
let i = 0;
for (let val of items) {
    let off = val / 10;
    items[i] = items[i] - off;
    console.log(items[i]);
    i++;
}
//array methods
let st = ['apple', 'mango', 'orange', 'bananna'];
let st1 = ['alamin', 'siam', 'raju', ];
st.push('dragon');
st.push('dgn');
st.pop();
console.log(st.toString());
let srr = st.concat(st1);
srr.unshift('rakib');

console.log(srr);
srr.shift();
console.log(srr);
//slice
console.log(srr.slice(1, 4)); //splice
console.log(srr.splice(1, 1, ));

let companies = ['loomberg', 'microsoft', 'Uber', 'google', 'ibm', 'netflix'];
console.log(companies.shift());
console.log(companies);
companies.splice(2, 1, 'Ola');
console.log(companies);
companies.push('Amazon');
console.log(companies);