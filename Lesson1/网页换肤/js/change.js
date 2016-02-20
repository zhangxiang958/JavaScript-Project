var button = document.getElementsByTagName('input');
var body = document.body;
for (var i = 0; i < button.length; i++) {

	if (button[i].className === "red-button"){
		button[i].onclick = function() {
			body.className = "red-body";
		}
	} else if(button[i].className === "green-button"){
		button[i].onclick = function() {
			body.className = "green-body";
		}
	} else {
		button[i].onclick = function() {
			body.className = "black-body";
		}
	}
	
}
