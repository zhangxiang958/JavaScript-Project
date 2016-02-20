var button = document.getElementsByTagName('input')[0];
button.onclick = function() {
	var div = document.getElementsByTagName('div');
	for(var i = 0; i < div.length; i++) {
		div[i].className = "change";
	}
}

