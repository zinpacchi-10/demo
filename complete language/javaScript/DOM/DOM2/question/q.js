//q1
let btn11 = document.createElement('button');
btn11.innerText = 'Click Me';
btn11.style.backgroundColor = 'red';
btn11.style.color = 'white';
document.body.appendChild(btn11);
console.log(btn11);
//q2
let para = document.querySelector('.paragraph');
para.classList.add('newClass');
para.getAttribute('class', 'newClass');;