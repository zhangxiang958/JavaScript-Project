var button = document.getElementsByTagName('input')[0];
var pop = document.getElementsByClassName("shade")[0];
var closeBtn = pop.getElementsByClassName("close-btn")[0];

button.onclick = function() {
	pop.style.display = "block";
}

closeBtn.onclick = function() {
	pop.style.display = "none";
}