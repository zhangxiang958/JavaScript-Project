var odiv = document.getElementsByTagName('div')[0];

odiv.onmouseover = function() {
	this.className = "change";
}
odiv.onmouseout = function() {
	this.className = "";
}