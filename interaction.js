// access elements from page
let menuIcon = document.getElementById("menuIcon");
let header = document.querySelector("header");
let nav = document.querySelector("nav");

let sections = document.querySelectorAll('section.content');

// define menu toggling function
function toggle()
{
	header.classList.toggle("expand");
	nav.classList.toggle("expand");
}

// define change section background color function
function changeBg()
{
	this.style.backgroundColor = 'var(--accent-color)';
}

// define remove section background color function
function removeBg()
{
	this.style.backgroundColor = 'revert-layer';
}

// apply function using event listener
menuIcon.addEventListener("click", toggle);

for (let i=0; i<sections.length; i++)
{
	sections[i].addEventListener('pointerover', changeBg);
}

for (let i=0; i<sections.length; i++)
{
	sections[i].addEventListener('pointerout', removeBg);
}