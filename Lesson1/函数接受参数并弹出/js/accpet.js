var input = document.getElementsByTagName('input');

input[2].onclick = function() {
	alert(input[0].value);
	alert(input[1].value);
}