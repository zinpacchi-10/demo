//attribute

let div = document.querySelector('div');
console.log(div);
let id = div.getAttribute('id');
console.log(id);
let name = div.getAttribute('name');
console.log(name);
let para = document.querySelector('p');
console.log(para.getAttribute('class'));
let div2 = document.querySelector('div');
div2.style.backgroundColor = 'red';
div.style.fontSize = '30px';
div.innerText = "MD Al amin";
let newBtn = document.createElement('button');
newBtn.innerText = "Click Me";
console.log(newBtn);
let p = document.querySelector('p');
p.after(newBtn);
let newH1 = document.createElement('h1');
newH1.innerHTML = "<i>This is a new heading</i>";
let body = document.querySelector('body');
body.prepend(newH1);
let para1 = document.querySelector('p');
para1.remove();