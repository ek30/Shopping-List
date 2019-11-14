var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var li = document.getElementsByTagName('li');

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	var button = document.createElement("button")
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	li.appendChild(button);
	button.innerHTML = "&times";
	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
		liEvent();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
		liEvent();
	}
}

liEvent();

function liEvent() {
	for( i=0; i<li.length; i++) {
	li[i].addEventListener('click', hideAfterClick)
	}
}

/*function changeClass() {
	this.classList.toggle('done');
}*/

/*hideEvent();

function hideEvent () {
	for( i=0; i<li.length; i++) {
	li[i].addEventListener('click', hideAfterClick)
	}
}*/

function hideAfterClick() {
		this.classList.add("hide");
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);