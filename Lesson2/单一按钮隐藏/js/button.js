var button = document.getElementsByClassName('list')[0].getElementsByTagName('a')[0];
var list = document.getElementsByClassName("list-item")[0];

button.onclick = function() {
	list.style.display = list.style.display == "block" ? "none" : "block";
}
