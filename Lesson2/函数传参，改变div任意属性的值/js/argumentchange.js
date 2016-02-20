var input = document.getElementsByTagName('input');
var div = document.getElementsByTagName("div")[0];

// input[2].onclick = function() {
// 	var propName = input[0].value;
// 	var value = input[1].value;
// 	div.style.cssText= propName + ":" + value ;

// 	// console.log(propName);
// 	// var index = propName.indexOf("-");
// 	// if(index === -1) {

// 	// } else {
// 	// 	propName = propName.slice(0, index) + propName.slice(index + 1,index + 2).toUpperCase() + propName.slice(index + 2);
// 	// 	console.log(propName);
// 	// }
// }
// input[3].onclick = function() {
// 	div.style.cssText = "";
// }

//优化
function changeStyle(elem, name, value) {
	elem.style[name] = value;
}
input[2].onclick = function() {
	changeStyle(div, input[0].value, input[1].value);
}
input[3].onclick = function() {
	div.removeAttribute("style");
}