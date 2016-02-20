var list = document.getElementsByClassName("pic-list")[0];

var item = list.getElementsByTagName('li');

for(var i = 0; i < item.length; i++){
	item[i].firstElementChild.onmouseover = function() {
		this.style.opacity = "1";
	}
	item[i].firstElementChild.onmouseout = function() {
		this.style.opacity = "0.1";
	}
}
// list.onmouseover = function(event){
// 	var target = event.target;

// }

window.onload = function() {
	var li = document.getElementsByTagName("li");

	for(var i = 0; i < li.length; i++){
		li[i].onmouseover = function() {
			this.className = "current";
		}
		li[i].onmouseout = function() {
			this.className = "";
		}
	}
}
