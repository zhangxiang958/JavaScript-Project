// var button = document.getElementsByTagName('input')[1];
// button.onclick = function() {
// 	number = document.getElementsByTagName('input')[0].value;
// 	if(number === "") {
// 		alert("请输入数字");
// 	} else if(number >= 10) {
// 		alert(number + "是两位数");
// 	} else {
// 		alert(number + "不是两位数");
// 	}
// }
var input = document.getElementsByTagName('input');

input[0].onkeyup = function() {
	this.value = this.value.replace(/ [^\d]/, "");
}
input[1].onclick = function() {
	(input[0].value == "")? alert("请输入数字") : alert(/ ^\d{2}$/.test(parseInt(input[0].value)) ? "是两位数" : "这是" + input[0].value.length + "位数");
}