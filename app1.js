// Creating a sneak a hint button
let para = document.querySelectorAll('.hint');
let sneak = document.querySelector('.sneak');
sneak.addEventListener('click', handleT);

function handleT() {
	for (let i = 0; i < para.length; i++) {
		if (para[i].style.opacity === '0') {
			para[i].style.opacity = '1';
		} else {
			para[i].style.opacity = '0';
		}
	}
}
let conMess = document.querySelector('.conMes');
const searchButton = document.querySelector('.searchButton');
searchButton.addEventListener('click', confirmNow);

let userInput = document.querySelector('.input');
let para1 = document.querySelector('.first');
let para2 = document.querySelector('.second');
let card2 = document.querySelector('.first2');
let card2a = document.querySelector('.second2');
let card3 = document.querySelector('.first3');
let card3a = document.querySelector('.second3');
let card4 = document.querySelector('.first4');
let card4a = document.querySelector('.second4');
let card5 = document.querySelector('.first5');
let card5a = document.querySelector('.second5');
let card6 = document.querySelector('.first6');
let card6a = document.querySelector('.second6');

function confirmNow(event) {
	event.preventDefault();
	if (userInput.value === 'Q') {
		conMess.style.opacity = 1;
		para1.style.opacity = 0;
		para2.style.opacity = 1;
		let newButton = document.createElement('button');
		newButton.innerHTML = 'click to checkoff card';
		para2.appendChild(newButton);
		newButton.addEventListener('click', div1);
		userInput.value = '';
	}
	if (userInput.value === 'CSS') {
		conMess.style.opacity = 1;
		card2.style.opacity = 0;
		card2a.style.opacity = 1;
		let newButton = document.createElement('button');
		newButton.innerHTML = 'click to checkoff card';
		card2a.appendChild(newButton);
		newButton.addEventListener('click', div2);
		userInput.value = '';
	}
}
// Create my content; I am going to select raspberry pie; html; javascript, css, python; server;
// if else if;
