let div = document.querySelector('div');
console.log(div);
console.dir(div.innerText);
console.dir(div.innerHTML);
let h2 = document.getElementById('hello');
console.dir(h2.innerText);
h2.innerText = h2.innerText + ' apan students';
let divs = document.querySelectorAll('.box');
console.log(divs);
let idx = 1;
for (let divv of divs) {
    divv.innerText = `Modified div ${idx}
    `;
    idx++;
}
// divs[0].innerText = 'Modified first div';
// divs[1].innerText = 'Modified second div';
// divs[2].innerText = 'Modified third div';