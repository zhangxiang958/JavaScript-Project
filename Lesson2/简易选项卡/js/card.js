window.onload = function() {
	var navU = document.getElementsByClassName('nav')[0];
	var nav = navU.getElementsByTagName('li');
	var message1 = document.getElementsByClassName("message1")[0];
	var message2 = document.getElementsByClassName("message2")[0];
	var message3 = document.getElementsByClassName("message3")[0];

	nav[0].onmouseover = function() {
		message1.style.display = "block";
		message2.style.display = "none";
		message3.style.display = "none";
	}
	nav[1].onmouseover = function() {
		message1.style.display = "none";
		message2.style.display = "block";
		message3.style.display = "none";
	}
	nav[2].onmouseover = function() {
		message1.style.display = "none";
		message2.style.display = "none";
		message3.style.display = "block";
	}
}