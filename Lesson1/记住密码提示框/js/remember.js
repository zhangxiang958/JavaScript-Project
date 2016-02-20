var remember = document.getElementsByTagName('div')[0];
var message = document.getElementsByTagName('div')[1];
remember.onmouseover = function() {
	message.style.display = "block";
}
remember.onmouseout = function() {
	message.style.display = "none";
}