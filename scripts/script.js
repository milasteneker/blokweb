// JavaScript Document

var hamburgerMenu = document.querySelector ('#hamburger');
var	hamburgerButton = document.querySelector ('#hamburgerButton')
var kruisjeButton = document.querySelector ('#kruisje');

hamburgerMenu.hidden=true;

function toonMenu () {
	hamburgerMenu.style.visibility='visible';
}

function verstopMenu () {
	hamburgerMenu.style.visibility='hidden';
}

hamburgerButton.addEventListener('click', toonMenu);
kruisjeButton.addEventListener('click', verstopMenu);


