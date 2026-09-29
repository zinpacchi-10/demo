string Start

let str = "alamin";
console.log(str[2]);

//specal String{template literals is tring interpolation}
let obj = {
    item: "pen",
    price: 10,
};
let output = `the cost of ${obj.item} is ${obj.price} taka`;
console.log(output);
console.log(length, "MD \n AL\tAmin ");
String Methods
let str = "    zero  knowledge  ";
let str1 = "nothing";
console.log(str.toUpperCase());
console.log(str.toLowerCase());
console.log(str.trim());

console.log(str.slice(1, 6));
console.log(str.concat(str1));
console.log(str.replace("zero", "o"));
console.log(str1.charAt(3));
//q1
let az = prompt("Enter a full name");
console.log("@" + az + az.length);