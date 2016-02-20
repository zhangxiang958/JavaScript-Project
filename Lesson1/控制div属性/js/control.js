// function changeHeight(ele) {
// 	ele.style.height = "200px";
// 	console.log(thing.style.height);
// }

// // var changeHeight = function(ele) {
// // 	ele.style.height = "200px";
// // 	console.log(thing.style.width);
// // }

// function changeWidth(ele) {
// 	ele.style.width = "200px";
// 	console.log(thing.style.width);
// }

// function changeColor(ele) {
// 	ele.style.backgroundColor = 'red';
// 	console.log(thing.style.backgroundColor);
// }

// function hide(ele) {
// 	ele.style.display = "none";
// 	console.log(thing.style.display);
// }

// function treset(ele) {
// 	ele.style.cssText = "";
// 	console.log(thing.style);
// }

// var width = document.getElementsByClassName("width")[0];
// var height = document.getElementsByClassName("height")[0];
// var color = document.getElementsByClassName("color")[0];
// var chide = document.getElementsByClassName("hide")[0];
// var creset = document.getElementsByClassName("reset")[0];
// var thing = document.getElementsByClassName('thing')[0];
// console.log(thing);
// // 这里有什么不同？为什么加上function才达到想要的结果
// // width.addEventListener("click", changeWidth(thing), false);
// width.addEventListener("click", function() {
// 	changeWidth(thing);
// },false);
// height.addEventListener("click", function() {
// 	changeHeight(thing);
// }, false);
// color.addEventListener("click", function() {
// 	changeColor(thing);
// }, false);
// chide.addEventListener("click", function() {
// 	hide(thing);
// }, false);
// creset.addEventListener("click", function() {
// 	treset(thing);
// }, false);




var changeStyle = function(elem, attr, value) {
	elem.style[attr] = value;
};
window.onload = function() {
	var obtn = document.getElementsByTagName('button');
	var div = document.getElementsByClassName("thing")[0];
	var attr = ["width", "height", "backgroundColor", "display", "display"];
	var oval = ["200px", "200px", "red", "none", "block"];
	// console.log(obtn);
	// console.log(div);
	for(var i = 0; i < obtn.length; i++){
		obtn[i].index = i;
		// console.log(obtn[i]);
		// console.log(obtn[i].index);
		obtn[i].onclick = function() {
			this.index == obtn.length - 1&&(div.style.cssText = "");
			changeStyle(div, attr[this.index], oval[this.index]);
		}
	}
}