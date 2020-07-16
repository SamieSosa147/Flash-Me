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
	if (userInput.value.includes('HTML')) {
		conMess.style.opacity = 1;
		para1.style.opacity = 0;
		para2.style.opacity = 1;
		let newButton = document.createElement('button');
		newButton.innerHTML = 'click to checkoff card';
		para2.appendChild(newButton);
		newButton.addEventListener('click', div1);
		userInput.value = '';
	}
	if (userInput.value.includes('API')) {
		conMess.style.opacity = 1;
		card2.style.opacity = 0;
		card2a.style.opacity = 1;
		let newButton = document.createElement('button');
		newButton.innerHTML = 'click to checkoff card';
		card2a.appendChild(newButton);
		newButton.addEventListener('click', div2);
		userInput.value = '';
	}
	if (userInput.value === 'Python') {
		conMess.style.opacity = 1;
		card3.style.opacity = 0;
		card3a.style.opacity = 1;
		let newButton = document.createElement('button');
		newButton.innerHTML = 'click to checkoff card';
		card3a.appendChild(newButton);
		newButton.addEventListener('click', div3);
		userInput.value = '';
		userInput.value = '';
	}
	if (userInput.value.includes('CSS')) {
		conMess.style.opacity = 1;
		card4.style.opacity = 0;
		card4a.style.opacity = 1;
		let newButton = document.createElement('button');
		newButton.innerHTML = 'click to checkoff card';
		card4a.appendChild(newButton);
		newButton.addEventListener('click', div4);
		userInput.value = '';
		userInput.value = '';
	}
	if (userInput.value.includes('Javascript')) {
		conMess.style.opacity = 1;
		card5.style.opacity = 0;
		card5a.style.opacity = 1;
		let newButton = document.createElement('button');
		newButton.innerHTML = 'click to checkoff card';
		card5a.appendChild(newButton);
		newButton.addEventListener('click', div5);
		userInput.value = '';
		userInput.value = '';
	}
	if (userInput.value.includes('Rasberry-Pi')) {
		conMess.style.opacity = 1;
		card6.style.opacity = 0;
		card6a.style.opacity = 1;
		let newButton = document.createElement('button');
		newButton.innerHTML = 'click to checkoff card';
		card6a.appendChild(newButton);
		newButton.addEventListener('click', div6);
		userInput.value = '';
	}
}
function div1() {
	let box1 = document.querySelector('.card1');
	box1.style.opacity = 0;
	conMess.style.opacity = 1;
	if (conMess.style.opacity === 1) {
		conMess.style.opacity = 0;
	} else {
		conMess.style.opacity = 0;
	}
}
function div2() {
	let box2 = document.querySelector('.card2');
	box2.style.opacity = 0;
	conMess.style.opacity = 1;
	if (conMess.style.opacity === 1) {
		conMess.style.opacity = 0;
	} else {
		conMess.style.opacity = 0;
	}
}
function div3() {
	let box3 = document.querySelector('.card3');
	box3.style.opacity = 0;
	conMess.style.opacity = 1;
	if (conMess.style.opacity === 1) {
		conMess.style.opacity = 0;
	} else {
		conMess.style.opacity = 0;
	}
}
function div4() {
	let box4 = document.querySelector('.card4');
	box4.style.opacity = 0;
	conMess.style.opacity = 1;
	if (conMess.style.opacity === 1) {
		conMess.style.opacity = 0;
	} else {
		conMess.style.opacity = 0;
	}
}
function div5() {
	let box5 = document.querySelector('.card5');
	box5.style.opacity = 0;
	conMess.style.opacity = 1;
	if (conMess.style.opacity === 1) {
		conMess.style.opacity = 0;
	} else {
		conMess.style.opacity = 0;
	}
}
function div6() {
	let box6 = document.querySelector('.card6');
	box6.style.opacity = 0;
	conMess.style.opacity = 1;
	if (conMess.style.opacity === 1) {
		conMess.style.opacity = 0;
	} else {
		conMess.style.opacity = 0;
	}
}

// Create my content; I am going to select raspberry pie; html; javascript, css, python; server;
// if else if;
