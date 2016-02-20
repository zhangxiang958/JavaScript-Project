var listL = document.getElementsByClassName('content')[0].getElementsByTagName('ul')[0];
var item = listL.getElementsByTagName('li');

for(var i = 0; i < item.length; i++) {
	item[i].index = i;
	console.log(i);
	item[i].onmouseover = function() {
		console.log(this);
		var img = this.getElementsByTagName('img')[0];
		img.style.display = "block";
	}
	item[i].onmouseout = function() {
		var img =this.getElementsByTagName('img')[0];
		img.style.display = "none";
	}
}