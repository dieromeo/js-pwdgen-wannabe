'use strict';

let elementName = 'nome';
let elementLastName = null;
let elementFavouriteColor = null;
const elementNumber = 21;
const elementPassword = document.getElementById('your-password');

//console.log(elementNumber)

elementName = prompt('Inserisci il tuo nome: ');
elementLastName = prompt('Type your lastname');
elementFavouriteColor = prompt('Type your favourite color');

console.log(elementName);
console.log(elementLastName);
console.log(elementFavouriteColor);

elementPassword.innerHTML = elementName + elementLastName + elementFavouriteColor + elementNumber;

console.log(elementPassword.innerHTML)