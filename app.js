'use strict';

var navButton = document.getElementById('nav-button');
var navBox = document.getElementById('nav-box');
var linkSpan = document.getElementsByClassName('link-span');

navBox.style.display = 'none';
navButton.addEventListener('click', displayBox);
navBox.addEventListener('mouseleave', hideBox);

function displayBox() {
	if (navBox.style.display === 'none') {
		navBox.setAttribute('style', 'display: box');
	} else {
		navBox.style.display = 'none';
	}
}

function hideBox() {
	navBox.setAttribute('sytle', 'display: none');
}