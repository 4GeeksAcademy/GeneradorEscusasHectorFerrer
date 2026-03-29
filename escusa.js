let who = ['The dog', 'My grandma', 'The mailman', 'My bird'];
let action = ['ate', 'peed', 'crushed', 'broke'];
let what = ['my homework', 'my phone', 'the car'];
let when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];

 
 function scusas(lista) {
  return lista[Math.floor(Math.random() * lista.length)];
 }
 

document.getElementById("excu").innerHTML = scusas(who) + " " + scusas(action) + " " + scusas(what) + " " + scusas(when);