var place = document.getElementsByClassName('warp')[0].getElementsByTagName('img')[0];
var list = document.getElementsByTagName('ul')[0];
var item = list.getElementsByTagName('li');

for(var i = 0; i < item.length; i++) {
	item[i].onmouseover = function() {
		var src = this.firstElementChild.getAttribute("src");
		place.setAttribute("src",src);
	}
}
// window.onload = function() {
// 	var img = document.getElementsByClassName('content')[0].getElementsByTagName('img');
// 	var place = document.getElementsByClassName('warp')[0].getElementsByTagName('img')[0];
// 	for(var i = 1; i < img.length; i++) {
// 		img[i].onmouseover = function() {
// 			var img = new Image();
// 			img.src = img[0].src = this.src.replace(/small/, "big");
// 			img.complete ? place.style.display = "none" : (img[0].onload = function() {
// 				place.style.display = "block";
// 			})
// 		}
// 	}
// }