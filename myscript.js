'use strict';

let elementName = 'nome';
let elementLastName = null;
let elementFavouriteColor = null;
const elementNumber = Math.floor(Math.random() * 100);
const elementPassword = document.getElementById('your-password');

//console.log(elementNumber)

elementName = prompt('Type your name ');
elementLastName = prompt('Type your lastname');
elementFavouriteColor = prompt('Type your favourite color');

console.log(elementName);
console.log(elementLastName);
console.log(elementFavouriteColor);

elementPassword.innerHTML = elementName + elementLastName + elementFavouriteColor + elementNumber;

console.log(elementPassword.innerHTML)