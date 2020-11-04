/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console':0*/

console.log ('hamburgermenu');

var hamburgerMenu = document.querySelector('#hamburger');
var	hamburgerButton = document.querySelector('#hamburgerButton');
var kruisjeButton = document.querySelector('#kruisje');


function toonMenu () {
	hamburgerMenu.classList.add("hamburgerMenuAan");
	hamburgerMenu.classList.remove("hamburgerMenuUit");
}

function verstopMenu () {
	hamburgerMenu.classList.remove("hamburgerMenuAan");
	hamburgerMenu.classList.add("hamburgerMenuUit");
}

hamburgerButton.addEventListener('click', toonMenu);
kruisjeButton.addEventListener('click', verstopMenu);

