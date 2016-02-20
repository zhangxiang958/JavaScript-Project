var div = document.getElementsByTagName('div');

for(var i = 0; i < div.length; i++) {
	div[i].onclick = function() {
		alert(this.innerHTML);
	}
}