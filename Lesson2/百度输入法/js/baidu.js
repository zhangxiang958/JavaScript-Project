var button = document.getElementsByTagName('input')[0];
var list = document.getElementsByTagName("ul")[0];

button.onclick = function() {
	list.style.display == "block" ? (list.style.display = "none") : (list.style.display = "block");
}
list.lastElementChild.onclick = function() {
	this.parentNode.style.display = "none";
}